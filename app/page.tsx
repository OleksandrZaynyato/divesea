import { Container } from '@/components/shared';
import {Weekly} from "@/components/shared/weekly/Weekly";
import {Slider} from "@/components/shared/weekly/Slider";
import {Banner} from "@/components/shared/banner/Banner";

export default function Home() {
    return (
        <Container>
            <h1>Home</h1>
            <Weekly />
            <Banner />
        </Container>
    );
}
