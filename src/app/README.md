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

