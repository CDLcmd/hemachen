<template>
  <el-select v-model="subject" placeholder="请选择学科" @change="selChange">
    <el-option v-for="(item,index) in subjectList" :key="index" :label="item.name" :value="item.id"></el-option>
  </el-select>
</template>

<script>
import { subjectList } from "@/api/subject.js";
export default {
  props: {
    value: {
      default: ""
    }
  },
  data() {
    return {
      subject: this.value,
      subjectList: []
    };
  },
  methods: {
    selChange() {
      this.$emit("input", this.subject);
    }
  },

  created() {
    //   获取学科数据
    subjectList({
      status: 1
    }).then(res => {
      this.subjectList = res.data.data.items;
    });
  }
};
</script>

<style>
</style>