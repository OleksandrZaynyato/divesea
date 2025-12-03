import { Container } from '@/components/shared';

import { Intro } from '@/components/shared';
import {Weekly} from "@/components/shared/weekly/Weekly";

export default function Home() {
    return (
        <Container>
            <Intro />
            <Weekly />
        </Container>
    );
}
