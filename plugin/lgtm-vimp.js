var INFO = xml`
<plugin name="lgtm-vimp.js"
        version="0.1"
        summary="LGTM vimperator plugin"
        href="http://github.com/naoty/lgtm-vimp"
        xmlns="http://vimperator.org/namespaces/liberator">

        <author email="naoty.k@gmail.com">Naoto Kaneko</author>
        <license href="http://opensource.org/licenses/mit-license.php">MIT</license>
        <project name="Vimperator" minVersion="3.3"/>
        <p>Read current page with zurukko</p>
        <item>
            <tags>"lgtm"</tags>
            <spec>:lgtm</spec>
            <description>
                <p>LGTM</p>
            </description>
        </item>
</plugin>`;

(function () {
    var name = "lgtm";
    var desc = "generate LGTM";
    var command = function (args) {
        var location = content.document.location;
        var newURL = "http://lgtm.herokuapp.com/" + location.href
        liberator.open(newURL)
    };

    commands.addUserCommand([name], desc, command);
})();
