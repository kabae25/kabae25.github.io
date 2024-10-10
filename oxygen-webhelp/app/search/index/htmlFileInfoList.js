var htmlFileInfoList = ["1 Server Hosting/1 Example Server Setup/example_server_setup.html@@@Example Server Setup@@@This chapter covers an example setup and start of a Minecraft Server. Step-by-step Quick Start using the PaperMC server software with a local IP. Installing Java Preparing the Server folder...","1 Server Hosting/1 Example Server Setup/p_connecting_to_the_server.html@@@Connecting to the Server@@@Connect and play locally on your Minecraft Server...","1 Server Hosting/1 Example Server Setup/p_creating_a_boot_script.html@@@Creating the Boot Script@@@Creating a script to launch and interface with the server software...","1 Server Hosting/1 Example Server Setup/p_downloading_a_minecraft_game_server.html@@@Downloading a Minecraft Game Server@@@Download the PaperMC server software. Note: Paper is a fork of Spigot/Bukkit that is highly performant, customizable and has plugin support. Additionally, it has a large community and rapid...","1 Server Hosting/1 Example Server Setup/p_edit_eula_and_server_propoerties.html@@@Edit EULA and Server Propoerties@@@Edit the EULA and Server Properties. Right click the file eula.txt , and click Edit . Important: If operating a large server, it is important to understand the bounds outlined by the EULA. Change line...","1 Server Hosting/1 Example Server Setup/p_how_to_install_java.html@@@Installing Java@@@Download and Install Java JDK. Minecraft relies on the Java SE which is bundled in with the Java SE Development Kit. Navigate to https://www.oracle.com/java/technologies/downloads/#jdk21-windows and...","1 Server Hosting/1 Example Server Setup/p_initialize_the_server.html@@@Initializing the Server@@@First time initialization of the server. Navigate to the My Minecraft Server folder created in Preparing the Server folder . There should only be the server jar inside. Right click the server jar and...","1 Server Hosting/1 Example Server Setup/p_preparing_the_server_folder.html@@@Preparing the Server folder@@@Make a new folder on your desktop for the server. The name of the folder does not influence the server properties, and players will not be able to see it. On the desktop, right click to bring up the...","1 Server Hosting/1 Example Server Setup/p_starting_the_server.html@@@Starting the Server@@@First time startup of the server...","1 Server Hosting/1 Example Server Setup/p_using_commands.html@@@Using commands@@@Allow a player to enter commands by granting them Operator status...","1 Server Hosting/2 Diving Deeper into Configuration/c_all_server_files.html@@@All Server Files@@@Complete list of files and folders generated at server startup (As of 1.21.1)...","1 Server Hosting/2 Diving Deeper into Configuration/c_creating_a_boot_script.html@@@Creating a Boot Script@@@...","1 Server Hosting/2 Diving Deeper into Configuration/c_finding_internal_and_external_ip_address.html@@@Finding internal and external IP address@@@...","1 Server Hosting/2 Diving Deeper into Configuration/c_minecraft_game_servers.html@@@Minecraft Server Software@@@A list of different Minecraft game server software...","1 Server Hosting/2 Diving Deeper into Configuration/c_server_initialization_files.html@@@Server Initialization Files@@@Descriptions about files and folder made at server initialization...","1 Server Hosting/2 Diving Deeper into Configuration/c_server_properties_configuration.html@@@Server Properties Configuration@@@Explaination of the server&apos;s configuration file...","1 Server Hosting/2 Diving Deeper into Configuration/diving_deeper_into_configuration.html@@@Diving Deeper into Configuration@@@This chapter goes into detail on the folders and configuration files of the server. Topics All Server Files Minecraft Server Software Server Initialization Files Server Properties Configuration...","1 Server Hosting/2 Diving Deeper into Configuration/p_finding_internal_and_external_ip_address.html@@@Finding your internal and external IP address@@@How to find your computer&apos;s internal and external IP Adress...","1 Server Hosting/2 Diving Deeper into Configuration/p_setting_a_server_icon.html@@@Setting a Server Icon@@@A server icon is a great way to personalize your server. Open the image you want to use as a server icon with the Photos app. Right Click over the image and select Resize image Set the Width (px) and...","1 Server Hosting/3 Hosting Resources/hosting_resources.html@@@Hosting Resources@@@Compiled useful reasources and reading relating to game server hosting and the technology behind it...","1 Server Hosting/3 Hosting Resources/r_about_java.html@@@About Java@@@Background information about Java and it&apos;s history with Minecraft...","1 Server Hosting/3 Hosting Resources/r_java_download_page.html@@@Java Download Page@@@Link for...","1 Server Hosting/3 Hosting Resources/r_java_requirements_for_different_minecraft_versions.html@@@Java requirements for different Minecraft Versions@@@Depending on the version of Minecraft you are looking to host for, there are different Java requirements...","1 Server Hosting/3 Hosting Resources/r_java_runtime_parameter_optimization.html@@@Java runtime parameter optimization@@@Collection of websites with optimized java runtime parameters for Minecraft servers...","1 Server Hosting/3 Hosting Resources/r_port_forwarding.html@@@Port Forwarding@@@Allowing others to connect to your network by opening ports on your computer and forwarding them through your router to the open internet...","1 Server Hosting/3 Hosting Resources/r_server_command_references.html@@@Server Command References@@@Commonly used server commands and their descriptions...","1 Server Hosting/server_hosting.html@@@Server Hosting@@@Chapter 1 covers the basics of server hosting. Sections Example Server Setup Diving Deeper into Configuration Hosting Resources Troubleshooting Topics Server Issues Java command not recognized Error...","2 Plugins/1 Example Plugin Installation/example_plugin_installaion.html@@@Example Plugin Installaion@@@Example installation through usage of a plugin with the PaperMC server software. Topics Prepare and Backup Worlds Browse and Download EssentialsX Adding and Loading Plugins Edit Plugin Configuration...","2 Plugins/1 Example Plugin Installation/p_adding_and_loading_plugins.html@@@Adding and Loading Plugins@@@The plugins folder in the root directory contains all configuration and plugin jars. Note: Depending on your server software, there may already be files and folders in the plugins folder. Move the...","2 Plugins/1 Example Plugin Installation/p_browse_and_download_essentialsx.html@@@Browse and Download EssentialsX@@@Download EssentialsX. EssentialsX is a quality of life plugin that adds a variety of features like /home, /tpa, and more useful survival-centric commands. Navigate to...","2 Plugins/1 Example Plugin Installation/p_edit_plugin_configuration_file.html@@@Edit Plugin Configuration File@@@Some plugins have customizability that can&apos;t be changed with commands. Edit the EssentialsX configuration file to change the number of default homes from 3 to 1. Navigate to the Essentials folder...","2 Plugins/1 Example Plugin Installation/p_organize_plugins_folder.html@@@Organize Plugins Folder@@@...","2 Plugins/1 Example Plugin Installation/p_prepare_and_backup_worlds.html@@@Prepare and Backup Worlds@@@Your server software needs to support plugins in order to continue. Check Minecraft Server Software for support. Backup important files and folders before loading plugins. Select the overworld...","2 Plugins/1 Example Plugin Installation/p_reload_the_server_and_verify_plugin_installation.html@@@Reload the server and verify plugin installation@@@...","2 Plugins/1 Example Plugin Installation/p_test_plugin_on_a_minecraft_client.html@@@Test Plugin on a Minecraft Client@@@Follow Using commands before continuing. Testing the EssentialsX plugin in Game Give the Player operator status. Use the /op &lt;Player&gt; command. Use a command from a loaded plugin. Run the /sethome...","2 Plugins/2 Managing Plugins/c_bulk_plugin_initialization.html@@@Bulk Plugin Initialization@@@Because of possible incompatabilities, it is best practice when adding multiple plugins to either use a testing server or Sequentially add plugins to test for compatability. Use a Testing Server A...","2 Plugins/2 Managing Plugins/c_finding_plugins.html@@@Finding Plugins@@@...","2 Plugins/2 Managing Plugins/c_managing_plugin_compatability.html@@@Managing Plugin Compatability@@@Tips for managing plugin compatability...","2 Plugins/2 Managing Plugins/c_organizing_plugins.html@@@Organizing Plugins@@@Example best practices with multiple plugins...","2 Plugins/2 Managing Plugins/managing_plugins.html@@@Managing Plugins@@@Keeping plugins and their configuration files is important to maintaining a clean server installation. Topics Bulk Plugin Initialization Managing Plugin Compatability Organizing Plugins Removing...","2 Plugins/2 Managing Plugins/p_adding_removing_plugins.html@@@Adding/Removing Plugins@@@...","2 Plugins/2 Managing Plugins/p_bulk_plugin_initialization.html@@@Bulk Plugin Initialization@@@...","2 Plugins/2 Managing Plugins/p_removing_plugins.html@@@Removing Plugins@@@Steps for safely removing plugins for a server Stop the server . Either in game or in the server console, enter the /stop command to safely stop the server. Tip: Since all text entries in the server...","2 Plugins/3 Plugin Resources/plugin_resources.html@@@Plugin Resources@@@Topics Popular Plugins Reliable Plugin Sources...","2 Plugins/3 Plugin Resources/r_popular_plugins.html@@@Popular Plugins@@@A list of popular plugins...","2 Plugins/3 Plugin Resources/r_popular_plugins_by_category.html@@@Popular Plugins by Category@@@...","2 Plugins/3 Plugin Resources/r_reliable_plugin_sources.html@@@Reliable Plugin Sources@@@Short list of frequented websites for sourcing plugins...","2 Plugins/plugins.html@@@Plugins@@@Chapter 2 covers extending Minecraft&apos;s gameplay and utility with Plugins. Sections Example Plugin Installaion Managing Plugins Plugin Resources Troubleshooting Plugin is listed, but doesn&apos;t generate...","3 Permissions/1 Example Permissions Setup/c_about_permissions.html@@@About Permissions and Permissions Managers@@@What are Permissions A permission is a string that represents the ability to issue commands to the server. Permissions are organized in trees by ownership with categories and delimiters. For example...","3 Permissions/1 Example Permissions Setup/c_selecting_a_permission_manager.html@@@Selecting a Permission Manager@@@...","3 Permissions/1 Example Permissions Setup/example_permissions_setup.html@@@Example Permissions Setup@@@Workflow of creating a Group and giving Player&apos;s Permissions through inheritance. About Permissions and Permissions Managers Loading the LuckPerms Plugin Creating a User Group and Adding Permissions...","3 Permissions/1 Example Permissions Setup/p_adding_a_player_to_the_example_group.html@@@Assigning Players Permissions with Groups@@@LuckPerms works based on inheritance. Rather than Players being assigned membership to groups, Players are set to inherit permissions from groups. The advantages of this system are the stacking of...","3 Permissions/1 Example Permissions Setup/p_adding_permissions_to_the_example_group.html@@@Adding Permissions to the Example Group@@@...","3 Permissions/1 Example Permissions Setup/p_configuring_the_example_group.html@@@Configuring the Example Group@@@...","3 Permissions/1 Example Permissions Setup/p_creating_an_example_user_group.html@@@Creating a User Group and Adding Permissions@@@LuckPerms Groups are containers that hold multiple permission nodes. Beyond just permissions, Groups contain a variety of properties, like Suffixes , Prefixes , and much more. In this example, a Admin...","3 Permissions/1 Example Permissions Setup/p_loading_the_luckypermissions_plugin.html@@@Loading the LuckPerms Plugin@@@Your server must support Plugins to proceed. LuckPerms is a modern Permission Manager that begun development in 2017 that is built for use on small servers to large multi-server networks. It is...","3 Permissions/1 Example Permissions Setup/p_necessary_first_steps_for_permissions.html@@@Necessary First Steps for Permissions@@@...","3 Permissions/1 Example Permissions Setup/p_selecting_a_permission_manager.html@@@Selecting a Permission Manager@@@...","3 Permissions/1 Example Permissions Setup/p_testing_permissions_on_a_minecraft_client.html@@@Testing Permissions on a Minecraft Client@@@Testing Permissions in-game with a Minecraft Client Remove Operator status from the Player. Run the /deop &lt;Player&gt; command. Use a command that the player has permissions to. Run the /kick &lt;Player&gt...","3 Permissions/2 Further information about Permission Managers/c_about_permission_managers_and_selection.html@@@About Permission Managers and Selection@@@...","3 Permissions/2 Further information about Permission Managers/c_about_permissions.html@@@About Permissions@@@...","3 Permissions/2 Further information about Permission Managers/c_organizing_groups_and_users.html@@@Organizing Groups and Users@@@...","3 Permissions/2 Further information about Permission Managers/c_selecting_a_permission_manager.html@@@Selecting a Permission Manager@@@How to select an appropriate permission manager...","3 Permissions/2 Further information about Permission Managers/further_information_about_permission_managers.html@@@Further information about permission managers@@@...","3 Permissions/2 Permission Resources/permissions_resources.html@@@Permissions Resources@@@References about Permissions and Permission Managers LuckPerms Resources...","3 Permissions/2 Permission Resources/r_luckperms_resources.html@@@LuckPerms Resources@@@Links for LuckPerms resources online...","3 Permissions/3 Permission Resources/permissions_resources.html@@@Permissions Resources@@@...","3 Permissions/3 Permission Resources/r_luckypermissions_command_syntax.html@@@LuckyPermissions Command Syntax@@@...","3 Permissions/3 Permission Resources/r_luckypermissions_configuration.html@@@LuckyPermissions Configuration@@@...","3 Permissions/3 Permission Resources/r_luckypermissions_website.html@@@LuckyPermissions Website@@@...","3 Permissions/permissions.html@@@Permissions@@@Chapter 3 covers basic information about managing Player&apos;s command usage and permissions. Sections Example Permissions Setup Permissions Resources Troubleshooting Permission does not exist...","4 Troubleshooting/1 Server Issues/server_issues.html@@@Server Issues@@@...","4 Troubleshooting/1 Server Issues/tr_incorrect_java_version.html@@@Incorrect Java Version@@@Condition Cause Remedy...","4 Troubleshooting/1 Server Issues/tr_java_command_not_recognized.html@@@Java command not recognized@@@Condition Cause java command is not recognized because Java has not been fully installed. Remedy Restart Your Computer Open the Command prompt by pressing Win + R and entering cmd Type java -version...","4 Troubleshooting/1 Server Issues/tr_java_ver_error.html@@@Error occurred during initialization of VM@@@Condition Trying to start the server with the start.bat script. Cause An incorrect 32 bit version of Java attempting to run the server software. Remedy Open the command prompt and enter java -version...","4 Troubleshooting/1 Server Issues/tr_server_didn_t_generate_initialization_files.html@@@Server didn&apos;t generate initialization files@@@Condition Cause Remedy...","4 Troubleshooting/1 Server Issues/tr_server_won_t_start.html@@@Server won&apos;t start@@@Condition Cause Remedy...","4 Troubleshooting/1 Server Issues/tr_unable_to_access_jarfile.html@@@Unable to access jarfile@@@Condition Cause Java cannot access the server software because the reference to the file isn&apos;t correct. Remedy Check spelling on the name of the server software. Check to make sure the name of the...","4 Troubleshooting/1 Server Issues/tr_unknown_or_imcomplete.html@@@Unknown or Incomplete@@@Cause Remedy...","4 Troubleshooting/1 Server Issues/tr_unknown_or_incomplete.html@@@Unknown or incomplete command, see below for error@@@Cause Player does not have permission to use command Remedy Grant the player Operator status with the /op command. Or: assign the Player access to the command with a Permission Manager...","4 Troubleshooting/2 Pugin Issues/plugin_issues.html@@@Plugin Issues@@@...","4 Troubleshooting/2 Pugin Issues/tr_plugin_is_listed_but_doesn_t_generate_configuration_files.html@@@Plugin is listed, but doesn&apos;t generate configuration files@@@Cause The plugin may not generate it&apos;s own configuration files. Remedy Check the Plugin&apos;s documentation for more information, or try resolving missing Dependencies or Updating...","4 Troubleshooting/2 Pugin Issues/tr_plugins_don_t_work_or_cause_crashes.html@@@Plugins don&apos;t work or cause crashes@@@Condition Cause Remedy...","4 Troubleshooting/2 Pugin Issues/tr_plugins_won_t_appear_on_the_plugins_list.html@@@Plugins won&apos;t appear on the plugins list@@@Cause Plugin is missing dependencies or is running an outdated version incompatable with the server. Remedy Resolve the Plugin&apos;s missing dependencies. Or: Update the Plugin...","4 Troubleshooting/2 Pugin Issues/tr_server_crashes_when_i_try_to_run_a_command.html@@@Server crashes when I try to run a command@@@Condition Cause Remedy...","4 Troubleshooting/3 Permission Issues/permission_issues.html@@@Permission Issues@@@...","4 Troubleshooting/3 Permission Issues/tr_permission_does_not_exist.html@@@Permission does not exist@@@Condition Cause Remedy...","4 Troubleshooting/3 Permission Issues/tr_user_does_not_have_permission.html@@@User does not have permission@@@Condition Cause Remedy...","4 Troubleshooting/troubleshooting.html@@@General Troubleshooting@@@Diagnosing and fixing issues related to server administration. Sections Server Issues Plugin Issues Permission Issues...","cshelp.html@@@Context Sensitive Help@@@..."];
