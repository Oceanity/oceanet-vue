<template>
    <div id="sound-commands">
        <h1>Stream Sound Commands</h1>
        <div class="contents">
            <ul>
                <li v-for="category in categories" :key="category">
                    <ul>
                        <a
                            :href="'#' + category.title.replace(/\W/gi, '-')"
                            @click="jumpToEntry($event, category)"
                        >
                            {{ category.title }}
                        </a>
                        <li v-for="entry in category.entries" :key="entry">
                            <a
                                :href="'#' + entry.title.replace(/\W/gi, '-')"
                                @click="jumpToEntry($event, entry)"
                            >
                                {{ entry.title }}
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="commands" v-for="category in categories" :key="category">
            <a :name="category.title.replace(/[^\w\d]/gi, '-')" />
            <h2>{{ category.title }}</h2>
            <div class="entry" v-for="entry in category.entries" :key="entry">
                <a :name="entry.title.replace(/[^\w\d]/gi, '-')" />
                <h3>{{ entry.title }}</h3>
                <button @click="toggleEntry(entry)">
                    <span v-if="!entry.isCollapsed">-</span>
                    <span v-else>+</span>
                </button>
                <ul v-show="!entry.isCollapsed">
                    <li v-for="command in entry.commands" :key="command">
                        <pre>{{ formatText(command)[0] }}</pre>
                        <span
                            class="command-text"
                            v-html="formatText(command)[1]"
                        />
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import soundFiles from "../json/soundFiles.json";

export default {
    data() {
        return {
            categories: soundFiles.categories,
        };
    },
    methods: {
        formatText(text) {
            let split = text.split(" "),
                tag = split.shift();
            return [
                tag,
                split.join(" ").replace(/(\[[^\]]+\])/gi, "<span>$1</span>"),
            ];
        },
        toggleEntry(entry) {
            entry.isCollapsed = !entry.isCollapsed;
        },
        jumpToEntry(e, item) {
            e.preventDefault();
            let tag = document.querySelector(
                `a[name=${item.title.replace(/[^\w\d]/gi, "-")}]`
            );
            window.scrollTo(
                window.scrollX,
                tag.getBoundingClientRect().top - 120
            );
        },
    },
    mounted() {
        document.title = "Stream Sound Effects";
    },
};
</script>


<style>
#sound-commands {
    position: relative;
    z-index: 2;
    padding: 20px;
}

#sound-commands a[name] {
    margin-top: -100px;
}

#sound-commands h3 {
    margin: 20px 0 0;
    position: relative;
}
#sound-commands h3:after {
    content: "";
    display: block;
    top: 100%;
    left: 0;
    margin-top: 4px;
    width: 100%;
    border-bottom: 3px solid #fff;
    box-shadow: 1px 1px 2px #000;
}

#sound-commands .contents {
    margin: 0 0 40px;
    padding: 10px;
    border-radius: 10px;
    border-bottom: 10px solid rgba(0, 0, 50, 0.1);
    max-width: 400px;
    background: rgba(0, 0, 50, 0.3);
}
#sound-commands .contents ul {
    margin: 0;
    padding: 0;
}
#sound-commands .contents ul ul li {
    margin-left: 20px;
    list-style-type: square;
    font-weight: normal;
}
#sound-commands .contents li {
    line-height: 30px;
    list-style-type: none;
    font-weight: bold;
}
#sound-commands .contents a {
    text-decoration: none;
    color: #e3ebae;
}

#sound-commands .commands ul {
    margin: 0;
    padding: 4px 0;
    background: rgba(0, 0, 50, 0.3);
}
#sound-commands .commands li {
    display: flex;
    flex-wrap: wrap;
    padding: 4px;
    list-style-type: none;
    font-family: "Open Sans Condensed", sans-serif;
    font-weight: bold;
    letter-spacing: 1px;
    text-shadow: none;
}
#sound-commands .command-text span {
    margin-right: 2px;
    font-style: italic;
    color: rgba(255, 255, 255, 0.75);
}
#sound-commands .command-text {
    margin: 0;
    line-height: 30px;
}
#sound-commands pre {
    display: inline-block;
    margin: 0 10px 0 0;
    padding: 4px;
    font-family: "Consolas", serif;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0;
    color: aqua;
    background: rgba(0, 0, 0, 0.7);
    cursor: pointer;
}
#sound-commands .entry {
    position: relative;
    margin: 0 0 40px;
    border-bottom: 10px solid rgba(0, 0, 50, 0.4);
    border-radius: 0 0 10px 10px;
}
#sound-commands .entry button {
    position: absolute;
    top: 0;
    right: 0;
    width: 20px;
    height: 20px;
    line-height: 20px;
    padding: 0 4px;
    text-align: center;
    border-radius: 4px;
    border: none;
    font-size: 20px;
    font-weight: bold;
    background: #fff;
    user-select: none;
    cursor: pointer;
}
</style>
