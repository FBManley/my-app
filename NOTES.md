Phase 2 Project Guidelines / Goals / Plan
[GITHUB REPOSITORY]: A detailed commit history (30+ commits is your minimum goal).
A video walkthrough of your app — MUST be no longer than 3 minutes. 
A blog post about this phase of the curriculum. 
LEARNING GOALS:
Build a React single page application from scratch
Apply your knowledge of components, props and state management
Incorporate client-side routing
Use data from an API
>> MVP
Home page
Create recipe (fetch ingrediants)
Display recipe
List recipes
REQUIREMENTS:
1. You must make a single page application (only one index.html file) using create-react-app.
2. Your app should use at least 5 components in a way that keeps your code well organized.
    1. Home
    2. Navbar
    3. Login
    4. Signup
    5. RecipeList
    6. RecipeForm
    7. Recipe card
3.  At least 3 client-side routes using React Router. Be sure to include a nav bar or other UI element that allows users to navigate between routes.
    1.  Route / - Home Component
    2. /signup - signup
    3. /login - Login
    4. /recipe/new - MovieForm
    5. /recipe - MovieList
4. Use a json-server to create a RESTful API for your backend and make both a GET and a POST request to the json server. Use a form to make your post request, specifically a controlled form/component. Additionally, you may choose to incorporate data from an external API but it is not required.
You should keep your json-server data simple: avoid nested data and associations. You'll learn how to work with more complex data in the next two phases. Focus on the frontend for this project.
5. Add some styling: you're encouraged to write your CSS from scratch, either by using styled components or writing CSS files and using id/className to style your elements. You can also incorporate a UI framework (like React Bootstrap, Semantic UI, or Material UI) if you prefer.
Shortcuts:
rafce
shift + alt + downarrow copy line down
alt + up/down arrow (to move lines up/down)

##
{
    "users": [
        {
            "id": 1, 
            "username": "Jake",
        }
    ],
}
