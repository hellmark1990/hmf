<?php

namespace SocialNetworkBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use League\OAuth2\Client\Provider\Exception\IdentityProviderException;

class SocialAuthController extends Controller {
    /**
     * Link to this controller to start the "connect" process
     *
     * @Route("/connect/facebook", name="connect_facebook")
     */
    public function connectAction(){
        // will redirect to Facebook!
        return $this->get('oauth2.registry')
            ->getClient('facebook_main')// key used in config.yml
            ->redirect();
    }

    /**
     * @Route("/connect/facebook/check", name="connect_facebook_check")
     */
    public function connectCheckAction(Request $request){
        /** @var \KnpU\OAuth2ClientBundle\Client\Provider\FacebookClient $client */
        $client = $this->get('oauth2.registry')
            ->getClient('facebook_main');

        try {
            /** @var \League\OAuth2\Client\Provider\FacebookUser $user */
            $user = $client->fetchUser();

            $this->get('social_network.auth_connect')
                ->connect([
                    'email' => $user->getEmail(),
                    'username' => $user->getName(),
                    'avatar_url' => $user->getPictureUrl(),
                ]);

            return new RedirectResponse($this->generateUrl('fos_user_profile_edit'));
        } catch (IdentityProviderException $e) {
            $this->get('session')->getFlashBag()->add('social_auth_error', $e->getMessage());
            return new RedirectResponse($this->generateUrl('fos_user_security_login'));
        }
    }

    /**
     * Link to this controller to start the "connect" process
     *
     * @Route("/connect/google", name="connect_google")
     */
    public function connectGoogleAction(){
        // will redirect to Facebook!
        return $this->get('oauth2.registry')
            ->getClient('google')// key used in config.yml
            ->redirect();
    }

    /**
     * @Route("/connect/google/check", name="connect_google_check")
     */
    public function connectGoogleCheckAction(Request $request){
        /** @var \KnpU\OAuth2ClientBundle\Client\Provider\GoogleClient $client */
        $client = $this->get('oauth2.registry')
            ->getClient('google');

        try {
            /** @var \League\OAuth2\Client\Provider\GoogleUser $user */
            $user = $client->fetchUser();

            $this->get('social_network.auth_connect')
                ->connect([
                    'email' => $user->getEmail(),
                    'username' => $user->getName(),
                ]);

            return new RedirectResponse($this->generateUrl('fos_user_profile_edit'));
        } catch (IdentityProviderException $e) {
            $this->get('session')->getFlashBag()->add('social_auth_error', $e->getMessage());
            return new RedirectResponse($this->generateUrl('fos_user_security_login'));
        }
    }

    /**
     * Link to this controller to start the "connect" process
     *
     * @Route("/connect/linkedin", name="connect_linkedin")
     */
    public function connectLinkedinAction(){
        // will redirect to Facebook!
        return $this->get('oauth2.registry')
            ->getClient('linkedin')// key used in config.yml
            ->redirect();
    }

    /**
     * @Route("/connect/linkedin/check", name="connect_linkedin_check")
     */
    public function connectLinkedinCheckAction(Request $request){
        /** @var \KnpU\OAuth2ClientBundle\Client\Provider\LinkedInClient $client */
        $client = $this->get('oauth2.registry')
            ->getClient('linkedin');

        try {
            /** @var \League\OAuth2\Client\Provider\LinkedInResourceOwner $user */
            $user = $client->fetchUser();

            $this->get('social_network.auth_connect')
                ->connect([
                    'email' => $user->getEmail(),
                    'username' => $user->getFirstName() . ' ' . $user->getLastName(),
                ]);

            return new RedirectResponse($this->generateUrl('fos_user_profile_edit'));
        } catch (IdentityProviderException $e) {
            $this->get('session')->getFlashBag()->add('social_auth_error', $e->getMessage());
            return new RedirectResponse($this->generateUrl('fos_user_security_login'));
        }
    }

    /**
     * Link to this controller to start the "connect" process
     *
     * @Route("/connect/github", name="connect_github")
     */
    public function connectGithubAction(){
        // will redirect to Facebook!
        return $this->get('oauth2.registry')
            ->getClient('github')// key used in config.yml
            ->redirect();
    }

    /**
     * @Route("/connect/github/check", name="connect_github_check")
     */
    public function connectGithubCheckAction(Request $request){
        /** @var \KnpU\OAuth2ClientBundle\Client\Provider\LinkedInClient $client */
        $client = $this->get('oauth2.registry')
            ->getClient('github');

        try {
            /** @var \League\OAuth2\Client\Provider\GithubResourceOwner $user */
            $user = $client->fetchUser();

            $this->get('social_network.auth_connect')
                ->connect([
                    'email' => $user->getEmail(),
                    'username' => $user->getName(),
                ]);

            return new RedirectResponse($this->generateUrl('fos_user_profile_edit'));
        } catch (IdentityProviderException $e) {
            $this->get('session')->getFlashBag()->add('social_auth_error', $e->getMessage());
            return new RedirectResponse($this->generateUrl('fos_user_security_login'));
        } catch (\Exception $e) {
            $this->get('session')->getFlashBag()->add('social_auth_error', $e->getMessage());
            return new RedirectResponse($this->generateUrl('fos_user_security_login'));
        }
    }
}