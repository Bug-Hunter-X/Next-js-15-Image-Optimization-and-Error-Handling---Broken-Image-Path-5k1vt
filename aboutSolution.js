```javascript
// pages/aboutSolution.js
import Image from 'next/image';

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
      <div>
        {/*Corrected implementation using next/image*/}
        <Image src="/broken-image.jpg" alt="Broken Image" width={300} height={200} onError={() => {
          // Handle image load error
          console.error('Image load failed!');
          return <p>Image failed to load</p>;
        }} />
      </div>
    </div>
  );
}
```