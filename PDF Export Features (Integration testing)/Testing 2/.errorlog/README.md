To use this component in an MDX file, you can import it and pass the MDX content as a prop:

```
import PDFExport from './PDFExport';

const MyMDXContent = () => (
  <PDFExport mdxContent={mdxContent} />
);

```

MyMDXContent component in MDX file:

```
import MyMDXContent from './MyMDXContent';

# My MDX Page

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula mauris ut justo condimentum, a placerat ipsum vehicula.

<MyMDXContent />
```

Entire page export problem