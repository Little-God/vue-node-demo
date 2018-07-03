<template>
  <div>
    <heade></heade>
    <el-row :gutter="20" style="margin-top: 10px;">
      <el-col :span="20" :offset="2">
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            label="商品名称"
            width="280">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.goods_name }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="添加日期"
            width="180">
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{ scope.row.goods_time }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="价格"
            width="180">
            <template slot-scope="scope">
              <span style="margin-left: 10px">￥{{ scope.row.goods_price }}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.row)">修改</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <el-row :gutter="20" style="margin-top: 10px;">
      <el-col :span="20" :offset="11"><el-button type="primary" @click="addgoods()">添加商品</el-button></el-col>
    </el-row>
  </div>
</template>

<script>
  import axios from 'axios'
  import heade from '../public/header.vue'

  export default {
    data() {
      return {
        tableData: ''
      }
    },
    components: {
      'heade': heade
    },
    methods: {
      handleEdit(row) {
        this.$router.push({ name: 'form', params: { userId: row.goods_id }})
      },
      handleDelete(row) {
        axios.post('http://127.0.0.1:8083/deletegoods',{
          goods_id: row.goods_id
        }).then(res => {
          console.log(res.data.msg)
          location.reload();
        })
      },
      addgoods(){
        this.$router.push({ name: 'form'})
      }
    }
    ,
    created() {
      axios.get('http://127.0.0.1:8083/goods-list')
        .then(res =>{
          this.tableData = res.data.goods
        })
    }
  }
</script>

<style>
  .cell{
    text-align: center;
  }
</style>
