<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <h3>1)</h3>
                <p>{{ someText }}</p>
                <p>{{ someText | reverseText }}</p>

                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <h3>2)</h3>
                <p>{{ someText | textCount }}</p>

                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
                <h3>3 & 4)</h3>
                <p>{{ someNewTextFiltered }}</p>
                <p>{{ textCountFiltered }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import { textMixin } from './TextMixin.js'

    export default {
        mixins: [textMixin],
        data() {
            return {
                someText: "You're not my friend, you're my brother my friend!"
            };
        },
        filters: {
            reverseText(text) {
                return text.split("").reverse().join("");
            }
        }
    }
</script>

<style>
</style>
