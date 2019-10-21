Angular Reactive Forms
=====

*Note: Need to import ReactiveFormsModule for Reactive froms*

Reactive form module provides access to Form Group and From cotnrols and directives

**FormGroup & Form Control**

![Alt text](/FormGroupAndFormControl.png?raw=true "Optional Title")

Steps:

1) Create Basic html in template
2) Create object/instance of model using FromControl and FormGroup in component class
```
  registrationFrom = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    confirmpassword: new FormControl(''),
    address: new FormGroup({
      city: new FormControl(''),
      state: new FormControl(''),
      postalCode: new FormControl('')
    })
  });
  
```  
3) Update template with 'formGroup' and 'formControlName' with instance variable name created in component
```
<form [formGroup] = "registrationFrom">
```
