## directory structure


## default component logic

```
import Link from "next/link";

export default function Name() {
    return (
        <div></div>
    );
};
```

## subcomponents in components logic 
Cssplayground is a component that imports other components. This may be interpreted as a component Tree 

## moving background logic

1) the parent container is defined
```<div className="relative overflow-hidden">```
any item within the parent container is relative (which allows absolute position of its children props)

any child prop will be clipped if spanning outside of parent container

2) the base color is defined

```<div className="absolute inset-0 bg-neutral-800" />```

3) defining the moving pattern logic
```
<div
  className="absolute inset-0 opacity-10
  bg-[linear-gradient(45deg,#ffffff_25%,transparent_25%,transparent_50%,#ffffff_50%,#ffffff_75%,transparent_75%,transparent)]
  bg-[length:40px_40px]
  animate-[pan_8s_linear_infinite]"
/>
```

Either an image or defined pattern such as the example above will suffice.

The child prop image moves from point A to point B in 8 seconds because of this crucial property
```  animate-[pan_8s_linear_infinite]```

bg-size must be defined at a minimal size using property for the tile effect to work.
Thus bg-cover is not possible

```bg-[url(...)]``` to import any image. path import is possible

## logic

## backtick string interpolation ES6

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

```EXPLANATION:
object geistSans is assigned the class Geist

backtick string interpolation is then used to implement object's property to the metatag body

Pre-ES6 would require concatenation 'font-sans ' + geistSans.variable + ' ' 
```

## jsconfig.json compilerOptions

Shorthand route is possible.

```
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"],
      "@/ui/*": ["./src/ui/*"],
      "@/components/*": ["./src/components/*"],
      "@/assets/*": ["./src/assets/*"]
    }
  }
}
```


## <ul> and <li> vs <div>

<ul> is the container metatag for multiple <li> metatags
proficient at screen reading and acessibility unlike <div> 
in addition to providing additional SEO structure

## <Link href="#hashlink" scroll={false} /></Link>
if scroll={false} and hash link is used then clicking link will scroll to target section
if scroll={true} and hash link is used then clicking link will scroll to target section

if scroll={false} and page route is used then nothing happens
if scroll={true} and page route is used then link will scroll browser to the top of page
