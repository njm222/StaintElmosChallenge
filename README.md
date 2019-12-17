##Test Task.
The object of this task is to load the animated model in-browser 3D scene. You need to develop one of 2 cases.

You can take the 3D model here: https://www.mixamo.com 

###Acceptance criteria.
When I open the URL in the browser, I can see the animated 3D model staying on the ground. If I drag and drop I can rotate the Scene and see the sky and a sun.

####Case 1.
The ThreeJS Scene should include:
* Scene
* Camera
* OrbitControls
* 3D model
* SpotLight
* PlaneGeometry as a ground
* SphereGeometry as a sky

####Case 2.
The A-Frame Scene should include:
* &lt;a-scene&gt;
* &lt;a-camera&gt;
* 3D model
* &lt;a-light&gt;
* &lt;a-plane&gt; as a ground
* &lt;a-sky&gt;

Technical notes.
Please use React to develop one of the 2 cases provided.

We are looking for a strong understanding of the key concepts of libraries implementation, code quality, and quality assurance methods. We are not looking for a perfect, production-ready implementation.
The main areas we will be evaluating are the organization of responsibility, conventions, and consistency, overall performance and resilience to failures.
If you have any question please don't hesitate to ask.
Have fun and keep in mind not all aspects of the evaluation need to be demonstrated in code. Explaining via comments or technical notes can be effective for the purpose of this project.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

