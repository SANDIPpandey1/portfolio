function toggleProjects(containerId, button) {
    const container = document.getElementById(containerId);
    const hiddenProjects = container.querySelectorAll('.hidden-project');
    const isShowing = button.innerHTML.includes('Less');

    hiddenProjects.forEach(project => {
        if (isShowing) {
            project.classList.remove('show');
        } else {
            project.classList.add('show');
        }
    });

    if (isShowing) {
        button.innerHTML = button.innerHTML.replace('Less', 'More');
        button.closest('.section').scrollIntoView({ behavior: 'smooth' });
    } else {
        button.innerHTML = button.innerHTML.replace('More', 'Less');
    }
}
