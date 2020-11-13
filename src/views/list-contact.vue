<template>
  <div className="container">

      <router-link :to="{ name: 'addContact' }" class="btn btn-primary"
        >AddNew</router-link
      >

    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Date Created</th>
          <th scope="col">Date Modified</th>
          <th scope="col">Show Details</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="info in contactList">
          <td>{{ info.name }}</td>
          <td>{{ info.email }}</td>
          <td>{{ info.createdDate }}</td>
          <td>{{ info.modifiedDate }}</td>
          <td>
              <router-link
                :to="{ name: 'showcontact', params: { id: info.id } }"
                class="btn btn-primary"
              >
                Show</router-link
              >
          
          </td>

          <td>
              <router-link
                :to="{ name: 'editcontact', params: { id: info.id } }"
                class="btn btn-primary"
                >edit</router-link
              >
          </td>
          <td>
            <button className="btn btn-danger" @click="DeleteContact(info.id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  data: function () {
    return {};
  },

  computed: {
    contactList: function () {
      return this.$store.state.conatctList;
    },
  },
  methods: {
    DeleteContact: function (id) {
      this.$store.commit({
        type: "deleteContact",
        payload: id,
      });
    },
  },
 
};
</script>