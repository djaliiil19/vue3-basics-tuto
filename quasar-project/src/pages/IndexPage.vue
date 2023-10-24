<template>
  <q-page class="flex flex-col px-8 py-4 gap-4">
    <div
      class="w-full flex justify-between"
    >
      <h1
        class="text-3xl font-bold"
      >
        List of products
      </h1>
      <q-btn
        color="blue"
        icon="add"
        label="Add Product"
        @click="addModal = true"
      />
    </div>
    <q-table
      title="Products"
      :rows="products"
      :columns="columns"
      wrap-cells
      row-key="name"
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
            {{ props.row.description }}
          </q-td>
          <q-td key="price" :props="props">
            <q-badge color="purple">
              {{ props.row.price }} $
            </q-badge>
          </q-td>
        </q-tr>
      </template>
    </q-table>
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

import {onBeforeMount, ref} from "vue";
import {api} from "boot/axios";
import {useAuthStore} from "stores/auth";
import Modal from "components/Modal.vue";

const columns = [
  { name: 'action', align: 'center', label: 'Action' },
  { name: 'name', align: 'center', label: 'Name', field: 'name', sortable: true },
  { name: 'description', align: 'left', label: 'Description', field: 'description', sortable: true },
  { name: 'price', align: 'center', label: 'Price', field: 'price', sortable: true },
]
const products = ref([])
const confirmDeleteDialog = ref(false)
const editProductLoading = ref(false)
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
const authStore = useAuthStore()

const fetchProducts = async () => {
  await api
    .get('/products', {
      headers: {
        Authorization: `Bearer ${authStore.token}`
      }
    })
    .then((res) => {
      console.table(res.data.products)
      products.value = res.data.products
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
