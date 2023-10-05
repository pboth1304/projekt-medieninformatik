<template>
    <section class="follow-up-section">
        <template v-if="isVisible">

            <div class="loechgau follow-up-container animated">
                <YearIndicator year="1939" size="s" class="year-indicator" />
                <p class="heading-gold">Folgten die Löchgauer.
                    <span class="tooltip-toggle" @click="openDialog(Towns.Loechgau)"></span>
                    <ModalDialog :is-open="visibleDialog === Towns.Loechgau" text="Lorem ipsum" @closed="onDialogClosed">
                        <template #header>
                            <h3>Löchgau</h3>
                        </template>
                        <p>
                            Löchgau ist ein Weinbauort, dessen Lagen zur Großlage Schalkstein des Weinbaugebietes
                            Württemberg gehören.
                            Bereits 1407 wurde erstmals urkundlich erwähnt, dass die Kelter als Weinumschlagplatz genutzt
                            wurde.
                            1939 schlossen sich die Löchgauer den Besigheimer Winzern an.
                        </p>
                    </ModalDialog>
                </p>
            </div>
            <div class="bietigheim follow-up-container animated">
                <YearIndicator year="1951" size="s" class="year-indicator" />
                <p class="heading-gold">Die Bietigheimer Winzer schlossen sich an.
                    <span class="tooltip-toggle" @click="openDialog(Towns.Bietigheim)"></span>
                    <ModalDialog :is-open="visibleDialog === Towns.Bietigheim" text="Lorem ipsum" @closed="onDialogClosed">
                        <template #header>
                            <h3>Bietigheim</h3>
                        </template>
                        <p>
                            Rund 23 km nördlich von Stuttgart, liegt die Stadt Bietigheim-Bissingen. Sie ist eingebettet in
                            der landschaftlich reizvollen Hügellandschaft des Neckartals, am Zusammenfluss von Enz und
                            Metter.
                            Die weit über 1200 Jahre alte Geschichte der Stadt ist an vielen Stellen nachvollziehbar.
                            Auf knappem Stadtraum streben die Gebäude in die Höhe, um sich mit Schnitzereien und Zierrat
                            gegenseitig zu überbieten. Wohlstand früherer Jahrhunderte übersetzt sich hier auch in
                            Architektur. Weinhandel und Flößerei waren die Haupteinnahmequellen der Stadt und ermöglichten
                            den
                            Bürgern, sich repräsentative Stadthäuser zu erbauen.
                        </p>
                    </ModalDialog>
                </p>
            </div>
            <div class="gemmrigheim follow-up-container animated">
                <YearIndicator year="1961" size="s" class="year-indicator" />
                <p class="heading-gold">Die bis dahin eigenständige WG Gemmrigheim folgte.
                    <span class="tooltip-toggle" @click="openDialog(Towns.Gemmrigheim)"></span>
                    <ModalDialog :is-open="visibleDialog === Towns.Gemmrigheim" text="Lorem ipsum" @closed="onDialogClosed">
                        <template #header>
                            <h3>Gemmrigheim</h3>
                        </template>
                        <p>
                            Weinhänge mit einer Steigung von mindestens 45 Grad. Viele davon sind zwischen dem 13. und 15.
                            Jahrhundert entstanden, da das kostbare Ackerland für den Weinanbau verboten war. Heute stellen
                            die
                            Hänge eine einzigartige Kulisse dar. Die oftmals nur von Hand kultivierbaren Hanglagen verlangen
                            den
                            Winzern und Wengertern einiges ab. Auch bei der Lese ist Handarbeit angesagt. Welche Mühen diese
                            Bewirtschaftungsweise mit sich bringt, weiß nur, wer einmal an einem Sommertag im Hang
                            geschuftet
                            hat.
                            1.200 Stunden Schwerstarbeit pro Hektar muss ein Weinbaubetrieb im Jahr aufwenden; der
                            Flachlagenwinzer,
                            dem kraftsparende Maschinen zur Verfügung stehen, braucht gerade einmal 300-400.
                        </p>
                    </ModalDialog>
                </p>
            </div>
        </template>
    </section>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import YearIndicator from './shared/YearIndicator.vue';
import ModalDialog from './shared/ModalDialog.vue';

interface FollowUpSection {
    isVisible: boolean;
}

enum Towns {
    Loechgau = 'Loechgau',
    Gemmrigheim = 'Gemmrigheim',
    Bietigheim = 'Bietigheim'
}

defineProps<FollowUpSection>()

const visibleDialog = ref<Towns | undefined>(undefined);

const openDialog = (dialogType: Towns) =>
    visibleDialog.value = dialogType

const onDialogClosed = () => visibleDialog.value = undefined;

</script>
<style scoped>
.follow-up-section {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 1fr);
    justify-items: center;
    height: 100vh;
    width: 100%;
    background-image:
        linear-gradient(10deg, rgba(0, 0, 0, 0.9) 50%, rgba(66, 66, 66, 0.93) 90%, rgba(66, 66, 66, 0.73) 100%),
        url('/img/traubenlese.jpg');
    background-position: center center;
    background-size: cover;
}

.follow-up-container {
    position: relative;
    z-index: 10;
    display: flex;
    align-items: center;
}

.loechgau {
    grid-column: 2 / 4;
    grid-row: 3 / 4;
}

.bietigheim {
    grid-column: 4 / 6;
    grid-row: 5 / 6;
    animation-delay: 0.8s;
}

.gemmrigheim {
    grid-column: 6 / 8;
    grid-row: 2 / 3;
    animation-delay: 1.6s;
}

h3 {
    font-weight: 400;
}

.tooltip-toggle {
    display: inline-block;
    height: 1.6rem;
    width: 1.6rem;
    background-color: var(--gold);
    border-radius: 100%;
    outline: var(--gold) solid 1px;
    outline-offset: 2px;
    transform: translate(50%, 50%);
    transition: all 1s ease-in-out;
    cursor: pointer;
}

.tooltip-toggle:hover,
.tooltip-toggle:focus {
    animation-name: pulsate;
    animation-timing-function: ease-in-out;
    animation-duration: 1s;
    animation-iteration-count: infinite;
}

@keyframes pulsate {
    0% {
        outline-offset: 2px;
    }

    50% {
        outline-offset: 3px;
        outline-width: 2px;
    }

    100% {
        outline-offset: 2px;
    }
}
</style>