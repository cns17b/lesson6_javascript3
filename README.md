## Project Name:  Photo Gallery Application

### Course Title:
Web Application Development

### Assignment Date:  
March 20, 2018

### Student Name:  
Cole Sheridan

### Project Description:
In this assignment, students demonstrated understanding of nodes on an HTML page by using javascript commands such as getElementById, getElementsByTag, AppendChild, etc. to manipulate a template photo gallery web page to preform specific actions when certain buttons were pressed.

### View Project:
(Replace this statement with your Github Page URL that was created when you 
 published the project.)

### Lessons Learned in the Assignment:
1. Using a tree model for an HTML page, each node on a webpage belongs to a parent on the page (with the exception of the head and body tags).  Nodes that belong to a parent are called child nodes.  Child nodes can have their own child nodes, and each node that is on the same level in the tree is a sibling node.
2. Normally, if you want to select a specific node on a HTML page using javascript, you would use the command "getElementById(id);" replacing the id in parenthesis with the id name of the element you want to select.  However, if this is not possible because the node you want to access does not have an id, you may access any element with an id first, then navigate through parent, child, and sibling nodes to reach the node you want to access.
3. Only parent nodes may access commands in javascript that manipulate child nodes on the webpage.  Examples of these commands would be parent.appendChild(name); to create a child node, or parent.removeChild(name); to delete a child (replacing parent with the name of the parent node, and name with the name of the child node to be added or removed).