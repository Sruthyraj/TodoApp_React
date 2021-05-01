const mongoose=require("mongoose")
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect("mongodb://localhost:27017/Todos",{useNewUrlParser:true});
const todo=mongoose.model( "todo",{
    title:String,
    completed:Boolean
})

module.exports={
    todo,
}



