<template>
  <div class="box padded">
    <h1>Pronouns+ Extension</h1>
    <p><a href="#Installation">Installation</a> - <a href="#Usage">Usage</a></p>
    <a name="Installation"></a>
    <h2>Installation</h2>
    <h3>1) SAMMI Bridge</h3>
    <p>Before installing the extension, you will need to have <strong>SAMMI Bridge</strong> open as the extension requires it to function. To open the bridge, use the <strong>SAMMI Bridge</strong> option in the left bar of <strong>SAMMI</strong>, and select either <strong>Open in a browser</strong> to open it in your default web browser (will need to do this every time if you choose this method) or <strong>Copy Full Path</strong> if you want to add the <strong>SAMMI Bridge</strong> as a <strong>Custom Dock</strong> in <strong>OBS Studio</strong> (see 1a).</p>
    <silent-box class="row" :gallery="install1Images"></silent-box>
    <h3>1a) Adding SAMMI Bridge as an OBS Custom Dock</h3>
    <p>In <strong>OBS Studio</strong>, open <strong>Custom Browser Docks...</strong> in the <strong>Docks</strong> menu and fill in the <strong>Dock Name</strong> field of the Dock (it does not matter what you write in that box) and paste the <strong>URL</strong> you copied from <strong>SAMMI Core</strong> in step 1 with <strong>Copy Full Path</strong> into the <strong>URL</strong> field.</p>
    <p>This will open a new <strong>Custom Dock</strong> that will be opened whenever you open <strong>OBS Studio</strong>, allowing <strong>SAMMI Core</strong> to use extensions while you are streaming/recording!</p>
    <silent-box class="row" :gallery="install2Images"></silent-box>
    <h3>2) Installing the Pronouns+ Extension</h3>
    <p>Back in <strong>SAMMI Core</strong>, open the <strong>SAMMI Bridge</strong> menu again, choose <strong>Install an Extension</strong> and in the <strong>Open File Dialog</strong> that shows up, find and open the <strong>Pronouns+ SEF File</strong> you downloaded off of <strong>Itch.IO</strong>. If it installed successfully, it should create a new <strong>Deck</strong> in <strong>SAMMI Core</strong>*.</p>
    <p>
      <small>*If <strong>Deck</strong> was not added, the <strong>SAMMI Bridge</strong> is likely not connected, make sure the <strong>SAMMI Bridge</strong> is open and both it and <strong>SAMMI Core</strong> show as "Connected"</small>
    </p>
    <silent-box class="row" :gallery="install3Images"></silent-box>
    <h3>3) Getting familiar with the Pronouns+ Tab in SAMMI Bridge</h3>
    <p><strong>Pronouns+</strong> offers a <strong>User Interface</strong> that lets you easily see saved <strong>User Data</strong> and <strong>Pronoun Sets</strong> saved by the extension! You can also see the <strong>Current Version</strong> and my <strong>Socials</strong>.</p>
    <silent-box class="row" :gallery="install4Images"></silent-box>
    <h3>4) [Optional] Installing the Example Deck</h3>
    <p>Also included with <strong>Pronouns+</strong> is an <strong>Example Deck</strong> with premade chat commands that will plug in play in your chat. The commands are</p>
    <ul class="commands-list">
      <li>
        <strong><span class="command">!createpronounset */*/*</span></strong
        >: Creates new Pronoun Set with <span class="command">[subject]</span>/<span class="command">[object]</span>/<span class="command">[possessive]</span><br /><span class="example">(eg. <span class="command">!createpronounset she/her/hers</span>)</span>
      </li>
      <li>
        <strong><span class="command">!createpronounset */*/*/*/*</span></strong
        >: Creates new Pronoun Set with <span class="command">[subject]</span>/<span class="command">[object]</span>/<span class="command">[possessive]</span>/<span class="command">[possessive_pronoun]</span>/<span class="command">[reflexive]</span> <br /><span class="example">(eg. <span class="command">!createpronounset they/them/their/theirs/themself</span>)</span>
      </li>
      <li>
        <strong><span class="command">!deletepronounset *</span></strong
        >: Deletes Pronoun Set with <span class="command">[id]</span><br /><span class="example">(eg. <span class="command">!deletepronounset he/they</span>)</span>
      </li>
      <li>
        <strong><span class="command">!setmypronouns *</span></strong
        >: Overwrites User's Pronouns with <span class="command">[id]</span><br /><span class="example">(eg. <span class="command">!setmypronouns he/him</span>)</span>
      </li>
      <li>
        <strong><span class="command">my pronouns are *</span></strong
        >: Overwrites User's Pronouns with <span class="command">[id]</span><br /><span class="example">(eg. <span class="command">my pronouns are any</span>)</span>
      </li>
      <li>
        <strong><span class="command">!addpronouns *</span></strong
        >: Adds <span class="command">[id]</span> to User's Pronouns<br /><span class="example">(eg. <span class="command">!addpronouns fae/faer</span>)</span>
      </li>
      <li>
        <strong><span class="command">!removepronouns *</span></strong
        >: Removes <span class="command">[id]</span> from User's Pronouns<br /><span class="example">(eg. <span class="command">!removepronouns they/she</span>)</span>
      </li>
    </ul>
    <p>To install the <strong>Example Deck</strong>, open the <strong>Example Deck vX.X.X.json</strong> file, <strong>Select All</strong> text and <strong>Copy</strong>, then in <strong>SAMMI Core</strong> click the <strong>Plus Button</strong> for adding a new deck and choose <strong>Paste Deck</strong>.</p>
    <silent-box class="row" :gallery="import1Images"></silent-box>
    <a name="Usage"></a>
    <h2>Usage</h2>
    <p>After you've installed Pronouns+, you will have access to 6 new <strong>Commands</strong> when editing Buttons. All commands provided are <strong>Asynchronous</strong>, meaning that you will need to put a <strong>Wait Until Variable Exists Command</strong> under them with the <strong>Variable Name</strong> you set in the <strong>Save Variable As</strong> field.</p>
    <p>This will ensure the extension has time to grab the command and return the value!</p>
    <h3>Pronouns+: Get Twitch User Pronouns</h3>
    <img src="@a/sammi/pronouns-plus/command-get-user-pronouns.png" title="Pronouns+: Get Twitch User Pronouns" />
    <ul class="properties">
      <li><strong>User Name</strong>: User Name to check, accepts formats <span>@UserName</span>, <span>UserName</span>, or <span>username</span></li>
      <li>
        <strong>Include Cases</strong>: What Letter Cases to return
        <ul>
          <li><span>All</span>: returns Title Case, lower case, and UPPER CASE variables</li>
          <li><span>Title</span>: returns only Title Case variables</li>
          <li><span>lower</span>: returns only lower case variables</li>
          <li><span>Title + lower</span>: returns only Title Case and lower case variables</li>
          <li><span>UPPER</span>: returns only UPPER CASE variables</li>
          <li><span>Title + UPPER</span>: returns only Title Case and UPPER CASE variables</li>
          <li><span>lower + UPPER</span>: returns only lower case and UPPER CASE variables</li>
        </ul>
      </li>
      <li>
        <strong>Random Style</strong>: How you want the returned set to be randomized
        <ul>
          <li><span>Individual Pronouns</span>: randomizes each pronoun in a set, eg. She/They = She/Them/Their/Hers/Herself or They/Them/Her/Hers/Themself</li>
          <li><span>Pronoun Set</span>: randomly grabs entire set, eg. She/They = She/Her/Her/Hers/Herself or They/Them/Their/Theirs/Themself</li>
        </ul>
      </li>
      <li><strong>Save Variable As</strong>: Variable the command will save response to</li>
    </ul>
    <h3>Pronouns+: Set Twitch User Pronouns</h3>
    <img src="@a/sammi/pronouns-plus/command-set-user-pronouns.png" title="Pronouns+: Set Twitch User Pronouns" />
    <ul class="properties">
      <li><strong>User Name</strong>: User Name to set pronouns for, accepts formats <span>@UserName</span>, <span>UserName</span>, or <span>username</span></li>
      <li>
        <strong>Pronoun Set ID</strong>: ID of Pronoun Set to use, accepts formats <span>Pronoun/Pronoun</span> (eg. He/Him), <span>pronounpronoun</span> (eg. sheher)
        <ul>
          <li>
            <small>The ID is usually <span>Subject/Object</span>, but if the pronoun set's Subject and Object are the same (eg. <span>It/It/Its/Its/Itself</span>) the ID will be <span>Subject/Possessive</span> instead (eg. <span>It/Its</span>)</small>
          </li>
        </ul>
      </li>
      <li><strong>Save Variable As</strong>: Variable the command will save response to</li>
    </ul>
    <h3>Pronouns+: Add Pronouns To User</h3>
    <img src="@a/sammi/pronouns-plus/command-add-pronouns-to-user.png" title="Pronouns+: Add Pronouns To User" />
    <ul class="properties">
      <li><strong>User Name</strong>: User Name to add pronouns to, accepts formats <span>@UserName</span>, <span>UserName</span>, or <span>username</span></li>
      <li>
        <strong>Pronoun Set ID</strong>: ID of Pronoun Set to add, accepts formats <span>Pronoun/Pronoun</span> (eg. He/Him), <span>pronounpronoun</span> (eg. sheher)
        <ul>
          <li>
            <small>The ID is usually <span>Subject/Object</span>, but if the pronoun set's Subject and Object are the same (eg. <span>It/It/Its/Its/Itself</span>) the ID will be <span>Subject/Possessive</span> instead (eg. <span>It/Its</span>)</small>
          </li>
        </ul>
      </li>
      <li><strong>Save Variable As</strong>: Variable the command will save response to</li>
    </ul>
    <h3>Pronouns+: Remove Pronouns From User</h3>
    <img src="@a/sammi/pronouns-plus/command-remove-pronouns-from-user.png" title="Pronouns+: Remove Pronouns From User" />
    <ul class="properties">
      <li><strong>User Name</strong>: User Name to remove pronouns from, accepts formats <span>@UserName</span>, <span>UserName</span>, or <span>username</span></li>
      <li>
        <strong>Pronoun Set ID</strong>: ID of Pronoun Set to add, accepts formats <span>Pronoun/Pronoun</span> (eg. He/Him), <span>pronounpronoun</span> (eg. sheher)
        <ul>
          <li>
            <small>The ID is usually <span>Subject/Object</span>, but if the pronoun set's Subject and Object are the same (eg. <span>It/It/Its/Its/Itself</span>) the ID will be <span>Subject/Possessive</span> instead (eg. <span>It/Its</span>)</small>
          </li>
        </ul>
      </li>
      <li><strong>Save Variable As</strong>: Variable the command will save response to</li>
    </ul>
    <h3>Pronouns+: Create Pronoun Set</h3>
    <img src="@a/sammi/pronouns-plus/command-create-pronoun-set.png" title="Pronouns+: Create Pronoun Set" />
    <ul class="properties">
      <li><strong>Subject</strong>: Subject of Pronoun Set, eg. <span>he</span>, <span>she</span>, <span>they</span></li>
      <li><strong>Object</strong>: Object of Pronoun Set, eg. <span>him</span>, <span>her</span>, <span>them</span></li>
      <li><strong>Possessive</strong>: Possessive of Pronoun Set, eg. <span>his</span>, <span>her</span>, <span>their</span></li>
      <li><strong>Possessive Pronoun (Optional)</strong>: Possessive Pronoun of Pronoun Set, will be generated if not provided, eg. <span>his</span>, <span>hers</span>, <span>theirs</span></li>
      <li><strong>Reflexive (Optional)</strong>: Reflexive of Pronoun Set, will be generated if not provided, eg. <span>himself</span>, <span>herself</span>, <span>themself</span></li>
      <li><strong>Save Variable As</strong>: Variable the command will save response to</li>
    </ul>
    <h3>Pronouns+: Delete Pronoun Set</h3>
    <img src="@a/sammi/pronouns-plus/command-delete-pronoun-set.png" title="Pronouns+: Delete Pronoun Set" />
    <ul class="properties">
      <li><strong>Subject</strong>: Subject of Pronoun Set, eg. <span>he</span>, <span>she</span>, <span>they</span></li>
      <li><strong>Object</strong>: Object of Pronoun Set, eg. <span>him</span>, <span>her</span>, <span>them</span></li>
      <li><strong>Possessive</strong>: Possessive of Pronoun Set, eg. <span>his</span>, <span>her</span>, <span>their</span></li>
      <li><strong>Possessive Pronoun (Optional)</strong>: Possessive Pronoun of Pronoun Set, will be generated if not provided, eg. <span>his</span>, <span>hers</span>, <span>theirs</span></li>
      <li><strong>Reflexive (Optional)</strong>: Reflexive of Pronoun Set, will be generated if not provided, eg. <span>himself</span>, <span>herself</span>, <span>themself</span></li>
      <li><strong>Save Variable As</strong>: Variable the command will save response to</li>
    </ul>
  </div>
</template>
  
<script>
import { Options, Vue } from "vue-class-component";
import VueSilentbox from "vue-silentbox";
import "vue-silentbox/dist/style.css";

/**
 * SAMMI - Pronouns+
 * @displayName Pronouns+
 */
@Options({
  components: {
    VueSilentbox,
  },
  data: () => ({
    install1Images: [
      { description: "Bridge Menu Location", src: require("@a/sammi/pronouns-plus/install-1.png") },
      { description: "Birdge Menu Options", src: require("@a/sammi/pronouns-plus/install-2.png") },
    ],
    install2Images: [
      { description: "OBS Dock Menu", src: require("@a/sammi/pronouns-plus/install-4.png") },
      { description: "Custom Browser Docks...", src: require("@a/sammi/pronouns-plus/install-5.png") },
      { description: "Filling in Custom Dock Information", src: require("@a/sammi/pronouns-plus/install-6.png") },
      { description: "SAMMI Bridge open as Custom Dock", src: require("@a/sammi/pronouns-plus/install-7.png") },
      { description: "Anchoring SAMMI to UI", src: require("@a/sammi/pronouns-plus/install-8.png") },
    ],
    install3Images: [
      { description: "Bridge Menu Location", src: require("@a/sammi/pronouns-plus/install-1.png") },
      { description: "Installing Extension to Bridge", src: require("@a/sammi/pronouns-plus/install-3.png") },
      { description: "Extension is Installed!", src: require("@a/sammi/pronouns-plus/install-9.png") },
    ],
    install4Images: [
      { description: "Bridge User Interface", src: require("@a/sammi/pronouns-plus/install-10.png") },
      { description: "Default Pronouns", src: require("@a/sammi/pronouns-plus/install-11.png") },
    ],
    import1Images: [
      { description: "Paste Deck", src: require("@a/sammi/pronouns-plus/import-1.png") },
      { description: "Pronouns+ Example Deck Installed", src: require("@a/sammi/pronouns-plus/import-2.png") },
      { description: "Example Buttons", src: require("@a/sammi/pronouns-plus/import-3.png") },
    ],
  }),
})
export default class SAMMIPronounsPlus extends Vue {}
</script>

<style lang="scss">
#silentbox-overlay__embed {
  width: 100% !important;
}
h3 {
  margin: 60px 0 20px;
}
.example {
  margin-left: 20px;
  font-style: italic;
  font-size: 0.9em;
  color: #aaa;
}
.box ul.properties {
  margin: 10px 0 0;
  padding-left: 20px;

  strong {
    color: gold;
  }

  span {
    font-family: "Courier New", "Courier", monospace;
    color: #ccc;
  }

  li {
    margin: 10px 0;
    ul {
      margin-left: 20px;
      li {
        margin: 5px 0;
      }
    }
  }
}
.box ul.commands-list {
  margin: 20px 0;
  padding-left: 20px;

  li {
    margin: 0 0 10px;
    list-style-type: square;
  }
}
.command {
  font-family: monospace;
  font-size: 0.95em;
  color: gold;
}
.row {
  display: flex;
  gap: 20px;
  margin: 20px 0 60px;

  > * {
    flex-basis: auto 0;
  }
}
.silentbox-item img {
  height: auto;
  width: 100%;
}
</style>
