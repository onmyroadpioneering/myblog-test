
        <template>
        <div>
            <el-card class="box-card">
                <template #header>
                    <div class="card-header">
                        <span>{{title}}</span>
                    </div>
                </template>
                <div v-for="(item,index) in content" :key="index" class="text item">{{ item }}</div>
            </el-card>
            </div>
        </template>



<script>




export default {
    components:{
    },
    props:{
            title:String,
            content:Array,
    }
}
</script>

<style scoped>
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}

.box-card {
    width: 80%;
    margin-left: 10%;
    margin-bottom: 30px;
}
</style>