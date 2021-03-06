<?php
namespace App\Controllers;

use App\Models\GuestMessage;
use App\Models\Page;
use Core\BaseController;
use Core\Http\Exception\NotFoundException;

class HomeController extends BaseController
{
    public function index()
    {
        $data = [
            'pages' => Page::findMostRecent(6),
            'messages' => GuestMessage::findAll(),
            'story_page' => Page::findByPageName('our-story'),
        ];

        return $this->view('home.html', $data);
    }

    public function guestBook()
    {
        $data = [
            'messages' => GuestMessage::findAll(),
        ];

        return $this->view('guest-book.html', $data);
    }

    public function photos()
    {
        $data = [
            'photos' => [], // TODO
        ];

        return $this->view('photos.html', $data);
    }

    public function rsvp()
    {
        return $this->view('rsvp.html');
    }

    public function showPage($request)
    {
        $pageName = $request->getAttribute('pageName');
        $page = Page::findByPageName($pageName);
        if (! $page) {
            throw new NotFoundException('Page not found');
        }

        $this->setMetadata([
            'title' => $page->meta_title,
            'description' => $page->meta_description,
            'keywords' => $page->meta_keywords,
        ]);

        return $this->view('internal-page.html', ['page' => $page->toArray()]);
    }
}
