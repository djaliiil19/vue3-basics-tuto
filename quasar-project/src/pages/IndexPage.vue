<template>
  <q-page class="flex flex-col px-8 py-4 gap-4">
    <div
      class="w-full flex justify-between"
      :class="{'flex-row-reverse': t.locale.value == 'ar-AR'}"
    >
      <h1
        class="text-3xl font-bold"
      >
        {{ $t('prod-title') }}
      </h1>
      <q-btn
        color="blue"
        icon="add"
        label="Add Product"
        @click="addModal = true"
      />
    </div>
    <div
      class="flex"
      :class="{'justify-start': t.locale.value == 'ar-AR', 'justify-end': t.locale.value != 'ar-AR'}"
    >
      <q-input
        class=""
        :label="t.locale.value == 'ar-AR' ? 'بحث' : 'Search'"
        v-model="search"
        clearable
      />
    </div>
    <q-table
      v-if="renderTable"
      title="Products"
      :rows="products"
      :columns="columns"
      wrap-cells
      row-key="name"
      :rows-per-page-options="[pagination.per_page]"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td>
            <div
              class="flex no-wrap"
            >
              <q-icon
                name="edit"
                size="sm"
                color="blue"
                class="hover:cursor-pointer hover:bg-gray-500 hover:bg-opacity-20 rounded-full p-2"
                @click="editItem(props.row.id)"
              />
              <q-icon
                name="delete"
                size="sm"
                color="red"
                class="hover:cursor-pointer hover:bg-gray-500 hover:bg-opacity-20 rounded-full p-2"
                @click="confirmDeleteDialog = true; productToBeDeleted = props.row.id"
              />
            </div>
          </q-td>
          <q-td key="name" :props="props">
            {{ props.row.name }}
          </q-td>
          <q-td key="description" :props="props">
<!--            {{ props.row.description }}-->
          </q-td>
          <q-td key="price" :props="props">
            <q-badge color="purple">
              {{ props.row.price }} $
            </q-badge>
          </q-td>
        </q-tr>
      </template>

      <!--   Pagination   -->


      <template v-slot:pagination>
        <div class="paginationflex paginationitems-center paginationgap-2 paginationmx-4">
          <label>Nombre de produits par page</label>
          <q-select
            v-model="pagination.per_page"
            :options="[5, 10, 15]"
            outlined
            dense
            flat
          />
        </div>
        <q-pagination
          v-model="pagination.page"
          color="black"
          :min="1"
          :max="pagination.lastPage"
          :max-pages="pagination.lastPage"
          :input="true"
        />
      </template>

      <!--      -->

    </q-table>

    <q-select
      v-model="t.locale.value"
      :options="['en-US', 'fr-FR', 'ar-AR']"
      class="fixed bottom-4 left-4"
    />
    <Modal
      :show="addModal"
      title="New product"
      @close="addModal = false"
      primaryBtnText="Add"
      primaryIcon="add"
      secondaryBtnText=""
      @click-primary-btn="addProduct"
      @click-secondary-btn=""
    >
      <div
        class="flex flex-col gap-2"
      >
        <q-input
          class="w-full"
          label="Name"
          v-model="productToBeAdded.name"
        />
        <q-input
          class="w-full"
          label="Description"
          type="textarea"
          v-model="productToBeAdded.description"
        />
        <q-input
          class="w-full"
          label="Price"
          v-model="productToBeAdded.price"
        />
      </div>
    </Modal>
    <Modal
      :show="editModal"
      :title="`Edit Product : ${productToBeEdited.name}`"
      @close="editModal = false"
      primaryBtnText="Edit"
      primaryIcon="edit"
      secondaryBtnText=""
      @click-primary-btn="editProduct"
      @click-secondary-btn=""
    >
      <div
        class="flex flex-col gap-2"
      >
        <q-input
          class="w-full"
          label="Name"
          v-model="productToBeEdited.name"
        />
        <q-input
          class="w-full"
          label="Description"
          type="textarea"
          v-model="productToBeEdited.description"
        />
        <input
          class="w-full"
          label="Image"
          type="file"
          @change="uploadImage"
        />
        <q-input
          class="w-full"
          label="Price"
          v-model="productToBeEdited.price"
        />
      </div>
    </Modal>
    <q-dialog
      v-model="confirmDeleteDialog"
      persistent
    >
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="delete" color="red" text-color="white" />
          <span class="q-ml-sm">Do you want really to delete this product ? </span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup @click="confirmDeleteDialog = false" />
          <q-btn flat label="Delete" color="red" v-close-popup @click="deleteItem" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>

import {nextTick, onBeforeMount, ref, watch} from "vue";
import {api} from "boot/axios";
import {useAuthStore} from "stores/auth";
import Modal from "components/Modal.vue";
import {useI18n} from "vue-i18n";
import {useQuasar} from "quasar";

const t = useI18n()
const $q = useQuasar()

watch(
  () => t.locale.value,
  (newVal) => {
    console.log('Lang watch : ', t)
    $q.notify({
      message: t.t('change-lang-msg'),
      caption: '5 minutes ago',
      color: 'primary'
    })
  }
)

const columns = [
  { name: 'action', align: 'center', label: 'Action' },
  { name: 'name', align: 'center', label: 'Name', field: 'name', sortable: true },
  { name: 'description', align: 'left', label: 'Description', field: 'description', sortable: true },
  { name: 'price', align: 'center', label: 'Price', field: 'price', sortable: true },
]
const products = ref([])
const renderTable = ref(true)
const confirmDeleteDialog = ref(false)
const editProductLoading = ref(false)
const search = ref('')
const addModal = ref(false)
const editModal = ref(false)
const productToBeDeleted = ref(null)
const productToBeEdited = ref({})
const productToBeAdded = ref({
  name: '',
  description: '',
  image: '',
  price: 0,
})


const pagination = ref({
  page: 1,
  per_page: 5,
  lastPage: 1,
})


const test = new FormData()
const authStore = useAuthStore()

watch(
  search,
  async (newVal, oldVal) => {
    if((newVal == null) || (newVal.length == 0) || (newVal.length >= 4)){
      await fetchProducts()
      renderTable.value = false
      await nextTick()
      renderTable.value = true
    }
  }
)

watch(
  ()=> [pagination.value.page, pagination.value.per_page],
  async (newVal, oldVal) => {
    console.log(newVal, oldVal)
    await fetchProducts()
  },
  {
    deep: true,
  }
);

const uploadImage = (e) => {
  console.log('uploadImage : ', e.target.files)
  productToBeEdited.image = e.target.files[0]
  test.append('image', e.target.files[0])
}

const fetchProducts = async () => {
  await api
    .get('/products', {
      headers: {
        Authorization: `Bearer ${authStore.token}`,
      },
      params: {
        search: search.value,
        per_page: pagination.value.per_page,
        page: pagination.value.page,
        lastPage: pagination.value.lastPage,
      }
    })
    .then((res) => {
      console.table(res.data.data)
      products.value = res.data.data
      pagination.value.page = res.data.current_page
      pagination.value.lastPage = res.data.last_page
    })
    .catch((err) => {
      console.error(err)
    })
}


onBeforeMount(async () => {
  await fetchProducts()
})

const editItem = (index) => {
  editModal.value = true
  productToBeEdited.value = products.value.find(item => item.id === index)
  console.log(index)
}

const addProduct = async () => {
  // persist data (add product-POST)
  await api
    .post(
      '/products',
      productToBeAdded.value,
      {
        headers: {
          Authorization: `Bearer ${authStore.token}`
        }
      }
    )
    .then(async (res) => {
      // product added
      console.log('Add : ', res)
      await fetchProducts()
      addModal.value = false
    })
    .catch((err) => {
      console.error(err)
    })

  productToBeAdded.value = {
    name: '',
    description: '',
    image: '',
    price: 0,
  }
}
const editProduct = async () => {
  await api
    .put(
      `/products/${productToBeEdited.value.id}`,
      productToBeEdited.value,
      {
        headers: {
          Authorization: `Bearer ${authStore.token}`
        }
      }
    )
    .then(async (res) => {
      await fetchProducts()
      editModal.value = false
    })
    .catch((err) => {
      console.error(err)
    })
}

const deleteItem = async () => {
  await api
    .delete(
      `/products/${productToBeDeleted.value}`,
      {
        headers: {
          Authorization: `Bearer ${authStore.token}`
        }
      }
    )
    .then(async (res) => {
      productToBeDeleted.value = null
      await fetchProducts()
    })
    .catch((err) => {
      console.error(err)
    })
}

</script>
