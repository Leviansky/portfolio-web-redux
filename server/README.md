```bash
    
    npx sequelize-cli model:generate --name User --attributes username:string,password:string,name:string,image:string,address:string

    npx sequelize-cli model:generate --name Post --attributes image:string,title:string,content:string,isPosting:boolean,UserId:integer

    npx sequelize-cli model:generate --name Education --attributes name:string,level:string,year:integer,UserId:integer

    npx sequelize-cli model:generate --name Organitation --attributes name:string,role:string,UserId:integer

    npx sequelize-cli model:generate --name Experience --attributes name_company:string,role:string,jobdesk:string,UserId:integer


```