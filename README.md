# Time Log Assigment

## Discovered Bugs
Graphqlapi.php:96

```
if ($args['staff_id']<1 || $args['staff_idA']>3) {
  throw new Exception('Invalid staff id', -3);
}
```

Produces an error:<br/>
```$args['staff_idA']>3```

Fix:<br/>
```$args['staff_id']>3```

Graphqlapi.php:71

Not a bug per se but I changed the hardcoded date format to dd.MM.yyyy to fit the rest of the app.<br/>
I think it's difficult to handle this edge case and transform any possible date format to a common one but this is a separate discussion.

Old:<br/>
```['id' => 99, 'day' => '2024-10-01', 'hours' => 3, 'time_from' => '10:00', 'time_to' => '13:00', 'project_name' => 'Haus Bau 1', 'subject' => null, 'staff_id' => 3]```

New:<br/>
```['id' => 99, 'day' => '01.01.2024', 'hours' => 3, 'time_from' => '10:00', 'time_to' => '13:00', 'project_name' => 'Haus Bau 1', 'subject' => null, 'staff_id' => 3]```


## ToDo
- Styles
- Error Handling
- Form Validation: https://www.primefaces.org/primereact-v8/reactfinalform/