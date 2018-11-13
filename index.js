const sdk = require('kinvey-flex-sdk');

sdk.service((err, flex) => {
    // code goes here

    const flexFunctions = flex.functions;

    function sendEmail(context, complete, modules) {
        const email = modules.email;
        email.send("jai.karve@progress.com",
         "michelle.golden@progress.com",
         "New Task Added",
         "You have added a new task with the following details " + "\n" +
         "Action: " + context.body.action + "\n" +
         "Due Date: " + context.body.duedate + "\n" +
         "Completed: " + context.body.completed + "\n" +
         "Title: Personal Task" + "\n" +
         "Class: Personal", 
         function(err, result) {
             if (err) {
                 complete().setBody("Could not complete request").runtimeError().done();
             }
            complete().ok().next();
        });
    }

    flexFunctions.register("sendEmailHandler", sendEmail);
});