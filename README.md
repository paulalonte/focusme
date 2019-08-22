# What's focus me

It adds focus to an element and adds label for accessibility

#Installation

`npm i focusme --save`

Then...

```
import { focusme } from 'focusme';

focusme({
    accessibleBlock: 'accessible-block',
    labels: ['Label 1', 'Label 2', 'Label 3']
});
```

##Options

focusme supports 2 options, accessibleBlock and labels:

**accessibleblock** - _element group that will be accessible to users_
**labels** - _array of labels to add name/label to an element. This if for screen readers to read_
