```bash
    
    npx sequelize-cli model:generate --name User --attributes username:string,password:string,name:string,image:string,description:string,phone:string,privatePhone:boolean

    npx sequelize-cli model:generate --name Friendlist --attributes UserId:integer,FriendId:integer,approve:boolean

    npx sequelize-cli model:generate --name RoomChat --attributes UserId:integer,FriendId:integer,chat:string,senderId:integer

    npx sequelize-cli model:generate --name GroupChat --attributes name:string,description:string,UserId:integer,FriendId:array,chat:string,senderId:integer

```