import "./DarkMode.css"

export function DarkMode() {

    const setDarkMode = () => {
        document.querySelector("body").setAttribute("data-theme", "dark")
        localStorage.setItem("selectedTheme", "dark");
    }

    const setLightMode = () => {
        document.querySelector("body").setAttribute("data-theme", "light")
        localStorage.setItem("selectedTheme", "light");
    }

    const selectedTheme = localStorage.getItem("selectedTheme");

    if (selectedTheme === "dark") {
        setDarkMode();
    }

    // L/D switch on click
    const toggleTheme = (e) => {
        if (e.target.checked) {
            setDarkMode();
        } else{
            setLightMode();
        }
    }

    // Activate L/D switch for keyboard only users
    function handleEnterKey(e) {
        if (e.code === "Enter") {
            const checkbox = document.getElementById("dark-mode-toggle");
            if (checkbox) {
                checkbox.click();
            }
        }           
    }

    return ( 
        <div 
            id="dark-mode-input-container"
            className='dark_mode' 
            tabIndex="-1"
            // onKeyDown={e => handleEnterKey(e)}
        >
            <input
                className='dark_mode_input'
                type='checkbox'
                id='dark-mode-toggle'
                onChange= {toggleTheme}
                defaultChecked={selectedTheme === "dark"}
            />
            <label className='dark_mode_label' htmlFor='dark-mode-toggle'>
            </label>
        </div>
    );
}