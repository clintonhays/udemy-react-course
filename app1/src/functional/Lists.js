import React, { useState } from "react";

const Lists = () => {
  const [pets, setPets] = useState(["dog", "dog", "dog", "cat"]);
  const mapped = pets.map((pet) => !"cat");

  return (
    <article>
      <header>
        <h2>Lists</h2>
        <h3>Working With Lists</h3>
        <p>
          Something you're likely to be doing lots of while working with React is working with lists. There are a few
          things to know before diving into how to properly render lists to React components. First is understanding the
          data you'll be working with. Next is how to access it, manipulate it, and render it. You will most likely be
          working with arrays. It is critical to become familiar with the array methods you have access to, but not all
          methods are create equal. Some we will use more than others. Three of the most common array methods are{" "}
          <code>.map()</code>, <code>.filter()</code>, and <code>.reduce()</code>. <br /> Let's look at these methods in
          a bit more detail.
        </p>
      </header>
      <section>
        <h3>.map()</h3>
        <p>
          Perhaps the most straightforward of the three methods is <code>.map()</code>. This method functions in a very
          similar manner to <code>.forEach()</code>. The big difference, and it's an important one, is that{" "}
          <code>.map()</code> returns a new array after it's task is completed, <code>.forEach()</code> returns
          undefined. The practicality of this is that we often will be iterating over data where we need the transformed
          array returned back to us, so in most scenarios we will employ <code>.map()</code>. <br />
          Below is an example of using <code>.map()</code>. I've given a state to our component that contains an array
          that looks like this: [🐕, 🐕, 🐕, 🐈]. Using <code>.map()</code> we will return a transformed array the
          leaves us with only 🐕 in the array. <br />
          {pets}
          {mapped}
        </p>
      </section>
    </article>
  );
};

export default Lists;
