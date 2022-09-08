import firestore from "@react-native-firebase/firestore";



class Firebase {
    firestore;
    constructor() {
        this.firestore = firestore();
    }
    getDataCollection = (name) => this.firestore.collection(name).get

    getCategories = () => this.firestore.collection("Categories").get();

    getArticles = () => this.firestore.collection("articles").get();

    getArticleById = (id) => this.firestore.collection(articles).doc(id).get();
}

export default Firebase