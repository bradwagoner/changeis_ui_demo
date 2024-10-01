export const Home = () => {
    return (
        <div className="p-4 col-12 col-lg-8">
            <h1>ChangeIt React Application</h1>

            <p>
                This is my first React application! I found the component lifecycle and .tsx syntax easier to use than I
                expected.
            </p>
            <p>
                This React application loads data from fakerapi.it and displays it in two different components using
                ReactBootstrap.
            </p>
            <p>
                I use a flex layout to render a header and footer around the Routed content.
            </p>
            <p>
                In future changes to this project I would like to implement a shared data service. I did some research
                and found myself conflicted over what would be the best way to share or pass along the faker data to the
                sub-components to prevent re-fetching on each load. I caught myself in a deep dive trying to get my head
                around Context/Props/Redux and a handful of other suggestions and ultimately opted for that to be a
                phase 2 goal.
            </p>
            <p>
                After you have clicked around checkout the <a href="http://localhost:4200">Angular
                Implementation</a> where I mirrored this functionality using Angular.
            </p>
        </div>
    );
};