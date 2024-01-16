<template>
  <div>
    <div class="head">
      <p>{{phones[0].model}}</p>
    </div>
    <div class="container">
      <div class="columns is-multiline">
        <!-- brand -->
        <!-- เหลือล็อกวันที่ กับรูป แล้วส่งข้อมูลไปเก็บในดาต้าเบส -->
        <div>
          <div class="columns" v-for="phone in phones" :key="phone.phone_id">
            <div class="column">
              <!-- <figure class="imgModel">
                        <img :src="phone.img">
                    </figure> -->
            </div>
            <div class="column">
              <div class="content" style="margin-top: 20%">
                <p class="title is-4">{{ phone.model }}</p>
                <br />
                <p class="subtitle is-6">ค่าเช่า {{ phone.rent }} /วัน</p>
                <p class="subtitle is-6">ค่ามัดจำ {{ phone.deposit }} /วัน</p>
                <hr style="width: 300px" />
                <form>
                  <div class="startDate mt-5">
                    <label class="subtitle is-6">วันรับสินค้า</label>
                    <input
                      type="date"
                      class="form-control"
                      id="date"
                      name="date"
                    />
                  </div>
                  <div class="endDate mt-3">
                    <label class="subtitle is-6">วันคืนสินค้า</label>
                    <input
                      type="date"
                      class="form-control"
                      id="date"
                      name="date"
                    />
                  </div>
                  <a class="button mt-6">จองเลย</a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "@/plugins/axios";

export default {
  props: ["user"],
  data() {
    return {
      search: "",
      phones: [],
      images: [],
    };
  },
  mounted() {
    this.getPhoneDetail(this.$route.params.id);
    console.log(this.$route.params.id);
  },
  methods: {
    getPhoneDetail(id) {
      axios
        .get(`http://localhost:3001/phone/${id}`)
        .then((response) => {
          console.log(response.data);
          this.phones = response.data.phone; //phone ชื่อเอามาจากหลังบ้าน
          this.images = response.data.image;
          console.log(response.data.image);
          console.log(response.data.phone);
        })
        .catch((error) => {
          this.error = error.response.data.message;
        });
    },
    // getDate() {
    //   var today = new Date();
    //   var dd = today.getDate();
    //   var mm = today.getMonth() + 1; //January is 0!
    //   var yyyy = today.getFullYear();

    //   if (dd < 10) {
    //     dd = "0" + dd;
    //   }

    //   if (mm < 10) {
    //     mm = "0" + mm;
    //   }

    //   today = dd + "/" + mm + "/" + yyyy;
    //   console.log(today);
    //   // document.getElementById("date").value = today;
    // },
    // image(file_path) {
    //   if (file_path) {
    //     return "http://localhost:3001" + file_path;
    //   } else {
    //     return "https://bulma.io/images/placeholders/640x360.png";
    //   }
    // },
  },
};
</script>

<style scoped>
.container {
  /* background-color: blueviolet; */
  width: 100%;
  padding-top: 5%;
}
.card:hover {
  border: 1px solid #a9907e;
}
.image {
  max-width: 100%;
  margin: 10%;
}

.imgPhone {
  width: 150px;
  height: 100px;
  margin: 10%;
}
.namePhone {
  padding-top: 30%;
  padding-left: 15%;
  margin: 10%;
}
.head {
  width: 100%;
  height: 10%;
  top: 9%;
  padding: 50px;
  background-color: #6d9886;
  text-align: center;
  font-size: xx-large;
  color: #f2e7d5;
}
</style>