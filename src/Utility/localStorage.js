const getStoredBooks = () =>{
    const storedBooks = localStorage.getItem('readBookId');
    
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
        localStorage.setItem('readBookId', JSON.stringify(preStoredBooks));
    }else{
        return true;
    }
} 

const getStoredWishBooks = () =>{
    const storedWishBooks = localStorage.getItem('wishBookId');

    if(storedWishBooks){
        return JSON.parse(storedWishBooks);
    }
    return [];
}

const saveWishBooks = (currentBookId) => {
    const preStoredWishBooks = getStoredWishBooks();
    const savedReadBooks = getStoredBooks();

    const isWishBookExist = preStoredWishBooks.find(WishbookID => WishbookID === currentBookId);
    
    if(!isWishBookExist){
        preStoredWishBooks.push(currentBookId);
        localStorage.setItem('wishBookId', JSON.stringify(preStoredWishBooks));
    }

    const checkReadBooks = savedReadBooks.find(readBookId => readBookId === currentBookId)
    if(checkReadBooks){
        return true;
    }
} 

export {getStoredBooks, saveBooks, getStoredWishBooks, saveWishBooks}