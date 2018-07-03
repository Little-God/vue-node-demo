<template>
  <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
    <el-form-item label="商品名称" prop="pass">
      <el-input type="text" v-model="ruleForm2.pass" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="商品价格" prop="age">
      <el-input v-model.number="ruleForm2.age"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm2')">添加商品</el-button>
      <el-button type="success" @click="gobackForm()">返回列表</el-button>
      <el-button @click="resetForm('ruleForm2')">取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
  import axios from 'axios'

  export default {
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('商品价格不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            callback();
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入商品名称'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          age: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            axios.post('http://127.0.0.1:8083/addgoods',{
              goods_id:this.$route.params.userId,
              goods_name:this.ruleForm2.pass,
              goods_price:this.ruleForm2.age
            }).then(res=>{
              console.log(res)
              this.$refs[formName].resetFields();
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      gobackForm(){
        this.$router.push({ name: 'list'})
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
