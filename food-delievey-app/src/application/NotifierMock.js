class NotifierMock{
    constructor(){}
    notify(userId, message){
        console.log('Notify', userId, message);
    }
}