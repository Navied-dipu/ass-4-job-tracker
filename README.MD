1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   => getElementById :
   Selects an element using ID
   for get specific only one element .it Works only with IDs

   getElementsByClassName:
   Selects elements using a class name. Returns HTMLCollection

   querySelector / querySelectorAll:
   CSS selectors .first /all matching elements.

2. How do you create and insert a new element into the DOM?
   => Create the element using document.createElement().
   Add content use innerHTML and apped as appendChild()

3. What is Event Bubbling? And how does it work?
   => where an event starts from the target element it it bubbling upward like
   Child → Parent → Grandparent → Document
4. What is Event Delegation in JavaScript? Why is it useful?
   =>Event Delegation is a technique where you attach a single event listener to a parent element instead of attaching separate listeners to multiple child elements.

   It works because of event bubbling. It is useful because. Improves performance

5. What is the difference between preventDefault() and stopPropagation() methods?
   => preventDefault():
   Stops the browser’s default action. Does not stop event bubbling.
   stopPropagation():
   stop bubbling. Does not stop the browser’s default behavior.
