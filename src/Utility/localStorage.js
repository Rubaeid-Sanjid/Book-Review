
const getStoredBooks = () =>{
    const storedBooks = localStorage.getItem('bookId');
    if(storedBooks){
        return JSON.parse(storedBooks);
    }
    return [];
}

const saveBooks = (currentBookId) => {
    const preStoredBooks = getStoredBooks();

    const isExist = preStoredBooks.find(bookID => bookID === currentBookId);

    if(!isExist){
        preStoredBooks.push(currentBookId);
        localStorage.setItem('bookId', JSON.stringify(preStoredBooks));
    }else{
        return true;
    }
} 

export {getStoredBooks, saveBooks}