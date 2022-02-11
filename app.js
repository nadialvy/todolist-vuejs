var app = new Vue({
  el : "#app",

  data : {
    todos : [], //wadah untuk menampung SEMUA INPUT
    todo : "" //menampung input todo yang sudah dikirim melalui vmodel
  },

  created(){
    this.loadLocalStorage();
  },

  watch : {
    todos(){
      localStorage.setItem("todos", JSON.stringify(this.todos));
    }
  },

  methods : {
    loadLocalStorage(){
      const ls = JSON.parse(localStorage.getItem("todos"));
      console.log(ls);
      if(ls == null){ return; }
      this.tofos = ls;
      console.log(this.todos);
    },
    addTodo : function(){
      this.todos.push(this.todo); //push = menambah item kedalam array this.todo = ""
      this.todo = ""; //clear input form
    },
    deleteTodo : function(index){
      this.todos.splice(index, 1); //splice = menghaus item array tertentu                                       
                                   // index = menentukan nilai mana yang akan dihapus
                                   // 1 menentukan berapa banyak item yang akan di hapus
    },
  }
})