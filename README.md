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

## ToDo
- Styles
- Error Handling
- ESLint