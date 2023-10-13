# Cloudflare Pages Captive Portal

The "Cloudflare Pages Captive Portal" project uses Cloudflare Pages to generate 204 status code responses. This lets devices check if they're connected to the internet.

## Setup the captive portal

1. Clone this project / Download this project
2. Deploy to Cloudflare Pages

## Setup your devices

(Replace the URL `https://captiveportal.pages.dev/` with your own!)

### Android

To change the Captive Portal Check in Android, you need a terminal app or a connection via ADB to a computer.

To use `https` you can use the following two commands:

```
# settings put global captive_portal_use_https 1
# settings put global captive_portal_https_url "https://captiveportal.pages.dev/generate204"
```

Maybe you have to reboot your phone after updating the settings.

If you are using AFWall+ you need to give access to _[1000] Android-System_ and in some cases _[10040] CaptivePortalLogin_ to make it work.

For more information see [here](https://android.stackexchange.com/a/186995/288049).

### Ubuntu

In Ubuntu, the file `/etc/NetworkManager/NetworkManager.conf` must be changed. Add or change the following lines:

```
[connectivity]
uri=https://captiveportal.pages.dev/generate204
```

Restart the network-manager:

```
sudo service network-manager restart
```

For more information see [here](https://askubuntu.com/q/1167177/920103).


### Fedora

In Fedora, the file `/etc/NetworkManager/NetworkManager.conf` must be changed. Add or change the following lines:

```
[connectivity]
uri=https://captiveportal.pages.dev/generate204
```

Restart the _NetworkManager_:

```
sudo service NetworkManager restart
```

### Firefox

Type [about:config](about:config) in the Firefox address bar and search for `captivedetect.canonicalURL` and `network.connectivity-service`. Set the URL values to `https://captiveportal.pages.dev/generate204`, the domain values to `connectivitycheck.pages.dev`. That's it.