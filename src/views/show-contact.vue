<template>
  <div className="container">
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <h5 class="card-title">Contact Info.</h5>

            <h6>
              Name:{{ detailContact.length > 0 && detailContact[0].name }}
            </h6>
            <h6>
              Email:{{ detailContact.length > 0 && detailContact[0].email }}
            </h6>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    detailContact: function () {
      return this.$store.state.conatctList.filter(
        (info) => info.id == this.$route.params.id
      );
    },
  },
};
</script>