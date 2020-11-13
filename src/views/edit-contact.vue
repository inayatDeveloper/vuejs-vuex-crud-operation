<template>
  <div className="container">
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <h5 class="card-title">Edit Contact.</h5>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              v-model="contact.name"
            />
            <br />
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              v-model="contact.email"
            />
            <br />
            <button className="btn btn-primary" @click="editContact">
              save
            </button>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dateTime from "../utils";
export default {
  data: () => {
    return {
      contact: {
        id: "",
        name: "",
        email: "",
        createdDate: dateTime(),
        modifiedDate: dateTime(),
      },
    };
  },
  created: function () {
    this.detailContact();
  },
  methods: {
    detailContact: function () {
      const contact = this.$store.state.conatctList.filter(
        (info) => info.id == this.$route.params.id
      );

      this.contact.name = contact[0].name;
      this.contact.email = contact[0].email;
      this.contact.id = this.$route.params.id;
    },
    editContact: function () {
      this.$store
        .dispatch({
          type: "editContact",
          payload: this.contact,
        })
        .then((res) => this.$router.push({ name: "contactList" }));
    },
  },
};
</script>