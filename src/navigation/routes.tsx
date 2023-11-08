import { Consulting } from "../modules/consulting/Consulting";
import { Contact } from "../modules/contact/Contact";
import { Project } from "../modules/projects/Project";
import { Welcome } from "../modules/welcome/Welcome";

export const routes = [
    {
        path: '/welcome',
        component: <Welcome />
    },
    {
        path: '/consulting',
        component: <Consulting />
    },
    {
        path: '/project',
        component: <Project />
    },
    {
        path: '/contact',
        component: <Contact />
    },
]