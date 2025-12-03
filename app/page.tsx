import { Container } from '@/components/shared';

import { Intro } from '@/components/shared';
import {Weekly} from "@/components/shared/weekly/Weekly";
import {Banner} from "@/components/shared/banner/Banner";

export default function Home() {
    return (
        <Container>
            <Intro />
            <Weekly />
            <Banner />
        </Container>
    );
}
