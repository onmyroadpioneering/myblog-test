<template>
  <div class="custom-tree-container">
    <el-tree :data="dataSource"
        show-checkbox node-key="id" 
        empty-text = ''
      >
      <template #default="{ node, data }">
        <span class="custom-tree-node">
          <input v-model="node.label" style="font-size: 10px;height:10px;margin:0;border: 0;margin-bottom: 3px;">
          <span>
            <a @click="append(data)"> Append </a>
            <a @click="remove(node, data)"> Delete </a>
          </span>
        </span>
      </template>
    </el-tree>
  </div>
</template>

<script>

export default {
  porps:{
    todos:[],
 
  },
  data() {
    return {
      id: 1000,
       
      la :'s',
    }
  },
  computed:{
    dataSource(){
      let no ={id:1,label:this.la,children:[{id:2,label:'b'}]}
      return no
    },
    dataSource1(){
      let ar = []
      let ro = {}
      let nu = 0
      for(let i=0;i<this.todos.length;i++){
        if(Array.isArray(this.todos[i])){
          ar.push([
        {
          id: 1,
          label: 'Level one 1',
          children: [
            {
              id: 4,
              label: 'Level two 1-1',
              children: [
                {
                  id: 9,
                  label: 'Level three 1-1-1',
                },
                {
                  id: 10,
                  label: 'Level three 1-1-2',
                },
              ],
            },
          ],
        },
        {
          id: 2,
          label: 'Level one 2',
          children: [
            {
              id: 5,
              label: 'Level two 2-1',
            },
            {
              id: 6,
              label: 'Level two 2-2',
            },
          ],
        },
        {
          id: 3,
          label: 'Level one 3',
          children: [
            {
              id: 7,
              label: 'Level two 3-1',
            },
            {
              id: 8,
              label: 'Level two 3-2',
            },
          ],
        },
      ])
        }else{
          ro.id = nu + 1
          nu = nu + 1
          ro.label = this.todos[i]
        }
      }
      return 0
    }
  }, 
  methods: {
    append(data) {
      const newChild = { id: this.id++, label: 'testtest', children: [] }
      if (!data.children) {
        data.children = []
      }
      data.children.push(newChild)
      this.dataSource = [...this.dataSource]
    },
    remove(node, data) {
      const parent = node.parent
      const children = parent.data.children || parent.data
      const index = children.findIndex((d) => d.id === data.id)
      children.splice(index, 1)
      this.dataSource = [...this.dataSource]
    }
  },

}

</script>

<style scoped>
.custom-tree-container{
  background-color: rgba(0, 255, 255, 1);
}
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
  background-color: rgba(0, 255, 255, 0);
}

</style>