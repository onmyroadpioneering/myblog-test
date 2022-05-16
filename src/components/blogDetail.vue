
        <template>
        <div>
            <el-card class="box-card">
                <template #header>
                    <div class="card-header">
                        <span>{{title}}</span>
                    </div>
                </template>
                <div class="text item">{{ content }}</div>
            </el-card>
            </div>
        </template>



<script>




export default {
    components:{
    },
    props:{
            title:String,
            content:String,
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
    height:50px;
    padding-bottom: 10px;
}

.item {
    margin-bottom: 18px;
    padding-bottom: 10px;
}

.box-card {
    width: 80%;
    margin-left: 10%;
    margin-bottom: 30px;
}
</style>