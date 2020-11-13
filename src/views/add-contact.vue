<template>
  <div className="container">
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <successmsg v-bind:msg="msg.success" />
            <h5 class="card-title">Add new Contact</h5>
            <input
              type="text"
              className="form-control"
              v-model="contact.name"
              placeholder="Name"
            />
            <label>{{ error.name }}</label>
            <br />
            <input
              type="email"
              className="form-control"
              v-model="contact.email"
              placeholder="Email"
            />
            <label>{{ error.email }}</label>
            <br />
            <button className="btn btn-primary" @click="AddContact">
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
import Successmessage from "../components/successmsg";
export default {
  data: function () {
    return {
      contact: {
        id: this.$store.state.conatctList.length + 1,
        name: "",
        email: "",
        createdDate: dateTime(),
        modifiedDate: dateTime(),
      },
      error: {
        name: "",
        email: "",
      },
      msg: {
        success: "",
      },
    };
  },
  components: {
    successmsg: Successmessage,
  },
  methods: {
   
    AddContact: function () {
      // simple validation..
      if (!this.contact.name) {
        this.error.name = "Name is required.";
      } else if (!this.contact.email) {
        this.error.email = "Email is required";
      } else {
        this.$store
          .dispatch({ type: "addContact", payload: this.contact })
          .then((res) => {
            this.msg.success = "Success fully added";
            setTimeout(() => {
              this.msg.success = "";
              this.$router.push({ name: "contactList" });
            }, 3000);
          })
          .catch((error) => alert("kddk"));
      }
    },
  },
};
</script>