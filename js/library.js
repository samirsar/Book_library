console.log("hii");


class Book
{
    constructor(name,author,type)
    {
        this.name=name;
        this.author=author;
        this.type=type;
    }
}




class display
{
    
    
    add(book1)
    {
        let library=localStorage.getItem("library");
        let libarray=[];
        if(library==null)
        libarray=[];
        else
        libarray=JSON.parse(library);
        
        libarray.push(book1);
        
        localStorage.setItem("library",JSON.stringify(libarray));
        this.show_library();
        
        
        
        
    }

    
    show_library()
    {
        let library=localStorage.getItem("library");
        let libarray=[];
        if(library==null)
        libarray=[];
        else
        libarray=JSON.parse(library);
        
        
        let str="";
        libarray.forEach(function(element,index){
            str+=`<tr>
            <td>${element.name}</td>
            <td>${element.author}</td>
            <td>${element.type}</td>
            <td> <button type="submit" class="btn btn-primary" id="${index}" onclick="deletenote(${index})"  >Delete book</button></td>
            </tr>`;
            
            
            
        
        })
        let tablebody=document.getElementById("tablebody");
        tablebody.innerHTML=str;

    
        
        
    }
    
    clear()
    {
        let library_form=document.getElementById("library_form");
        library_form.reset();
    }
}

let book2=new display();
book2.show_library();

let add_book=document.getElementById("Add_book");
add_book.addEventListener('click',function(e){
    let name=document.getElementById("Book_name").value;
    let author=document.getElementById("Author_name").value;
    
    let type;
    
    let Science=document.getElementById("Science");
    let Programming=document.getElementById("Programming");
    let cooking=document.getElementById("cooking");
    
    if(Science.checked)
    type=Science.value;
    if(Programming.checked)
    type=Programming.value;
    if(cooking.checked)
    type=cooking.value;

    let book1=new Book(name,author,type);
    
    let display1=new display();
    
    if(name.length<2||author.length<2)
    {
        console.log("error");
        let error=document.getElementById("error");
        error.innerHTML=`<div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>oops!</strong> not submitted please try again!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`;
    }
    else{
        console.log("success");
        let error=document.getElementById("error");
        error.innerHTML=`<div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>wow!</strong> you submited succesfully in library.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`;
      e.preventDefault();

        display1.add(book1);
        // display1.show_library();

        

    }
    setTimeout(function()
    {
        let error=document.getElementById("error");
        error.innerHTML="";
    },5000)
    display1.clear();
    e.preventDefault();

})



// for deleting book 
function deletenote(index)
{
    let library=localStorage.getItem("library");
        let libarray=[];
        if(library==null)
        libarray=[];
        else
        libarray=JSON.parse(library);


        libarray.splice(index,1);
        localStorage.setItem("library",JSON.stringify(libarray));

        let b=new display();
        b.show_library();

}

