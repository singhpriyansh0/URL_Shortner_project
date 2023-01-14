1   create a server 
    express. require. express()
    listen to a port

2    middlewares 
     added using app.use 

3    if person visit "/" (home page url) 
                                        => so we need to show index.html page (home page)
                                             => we do this by :-
                                             3.1 first write a midddleware using app.use('/',function)
                                             3.2 Inside this function we need to return the html file (index.html)

    
