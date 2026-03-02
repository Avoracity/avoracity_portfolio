## directory structure


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
